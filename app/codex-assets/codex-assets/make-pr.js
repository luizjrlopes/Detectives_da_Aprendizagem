import { execSync } from "child_process";

const branch = `feat/assets-${Date.now()}`;

function run(cmd) {
  console.log("$", cmd);
  return execSync(cmd, { stdio: "inherit" });
}

try {
  run(`git checkout -b ${branch}`);
  run(`git add assets asset-manifest.json codex-assets/assets.yml`);
  run(`git commit -m "feat(assets): add generated assets"`);
  run(`git push -u origin ${branch}`);
  run(
    `gh pr create --fill --title "feat(assets): novos assets" --body "Geração automática de assets."`
  );
  console.log("PR criado com sucesso!");
} catch (e) {
  console.error("Erro ao criar PR:", e?.message);
  process.exit(1);
}
