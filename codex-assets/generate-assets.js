// Script para gerar imagens automaticamente via API da OpenAI.
// Lê as definições de assets no arquivo assets.yml e salva o resultado
// no caminho especificado, registrando cada operação em asset-manifest.json.

const fs = require('fs/promises');
const path = require('path');
const yaml = require('yaml');

// Carrega dinamicamente o SDK do OpenAI (ESM) e instancia com a chave da API
async function loadOpenAI() {
  const { default: OpenAI } = await import('openai');
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

// Lê e converte o YAML para um array de objetos
async function readYaml(file) {
  const text = await fs.readFile(file, 'utf8');
  return yaml.parse(text);
}

// Carrega o manifesto existente ou retorna um array vazio
async function readManifest(file) {
  try {
    const data = await fs.readFile(file, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Persiste o manifesto atualizado criando a pasta se necessário
async function writeManifest(file, data) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(data, null, 2));
}

// Salva o buffer de imagem em disco criando diretórios caso não existam
async function saveBuffer(buffer, outPath) {
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, buffer);
}

// Tenta gerar a imagem até três vezes em caso de erro de rede
async function generateImage(openai, entry) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await openai.images.generate({
        prompt: entry.prompt,
        size: entry.size,
        n: 1,
      });
      const b64 = res.data[0].b64_json;
      if (!b64) throw new Error('Resposta sem imagem');
      const buffer = Buffer.from(b64, 'base64');
      await saveBuffer(buffer, path.resolve(entry.output));
      return true;
    } catch (err) {
      console.error(`Erro ao gerar ${entry.output} (tentativa ${attempt})`);
      if (attempt === 3) {
        console.error(err);
        return false;
      }
      // aguarda um segundo antes de tentar novamente
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
}

async function main() {
  const yamlPath = path.resolve('assets.yml');
  const manifestPath = path.resolve('codex-assets', 'asset-manifest.json');

  const entries = await readYaml(yamlPath);
  const manifest = await readManifest(manifestPath);
  const openai = await loadOpenAI();

  for (const entry of entries) {
    const success = await generateImage(openai, entry);
    manifest.push({
      prompt: entry.prompt,
      size: entry.size,
      output: entry.output,
      timestamp: new Date().toISOString(),
      success,
    });
  }

  await writeManifest(manifestPath, manifest);
}

// Executa o script e trata falhas inesperadas
main().catch((err) => {
  console.error('Falha geral:', err);
  process.exit(1);
});
