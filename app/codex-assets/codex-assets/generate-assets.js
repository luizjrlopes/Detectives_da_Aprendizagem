import "dotenv/config";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import OpenAI from "openai";
import sharp from "sharp";

const OPENAI_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_KEY) {
  console.error("Missing OPENAI_API_KEY in env");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_KEY });

const manifestPath = path.resolve("asset-manifest.json");
const yamlPath = path.resolve("codex-assets/assets.yml");

async function main() {
  if (!fs.existsSync(yamlPath)) {
    console.error("assets.yml não encontrado em", yamlPath);
    process.exit(1);
  }

  const doc = yaml.load(fs.readFileSync(yamlPath, "utf8"));
  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
    : [];

  for (const [category, items] of Object.entries(doc)) {
    for (const item of items) {
      // Skip if already in manifest (optional)
      const exists = manifest.find((m) => m.id === item.id);
      if (exists && fs.existsSync(item.out)) {
        console.log(`↷ Pulando ${item.id}, já existe.`);
        continue;
      }

      console.log(`→ Gerando ${category}/${item.id}`);

      const res = await openai.images.generate({
        model: "gpt-image-1",
        prompt: item.prompt,
        size: item.size || "1024x1024",
      });

      const b64 = res.data[0].b64_json;
      if (!b64) {
        console.error("Falha ao gerar imagem para", item.id);
        continue;
      }
      const buffer = Buffer.from(b64, "base64");

      const outPath = path.resolve(item.out);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });

      if (outPath.endsWith(".svg")) {
        // OpenAI não retorna SVG. Salvar como PNG temporário.
        const pngPath = outPath.replace(/\.svg$/i, ".png");
        await sharp(buffer).toFile(pngPath);
        console.warn(
          `⚠️ ${item.id}: PNG salvo em vez de SVG (${pngPath}). Substitua manualmente por SVG.`
        );
      } else {
        await sharp(buffer).toFile(outPath);
      }

      const record = {
        id: item.id,
        category,
        path: item.out,
        prompt: item.prompt,
        size: item.size || "1024x1024",
        tags: item.tags || [],
        createdAt: new Date().toISOString(),
      };
      manifest.push(record);
    }
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log("✔️ Manifest atualizado:", manifestPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
