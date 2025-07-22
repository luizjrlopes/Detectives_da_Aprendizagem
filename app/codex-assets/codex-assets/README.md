# Codex Assets Kit

Este pacote dá ao Codex (ou qualquer agente) **um caminho claro e automatizado** para gerar imagens/ícones/UI e abrir PRs.

## Fluxo padrão

1. **Precisou de um asset visual?**  
   - Edite `assets.yml` e adicione um item (id único, caminho `out`, prompt detalhado).

2. **Gerar arquivos**  
   ```bash
   pnpm assets:gen
   # ou
   npm run assets:gen
   ```

3. **(Opcional) Otimizar SVGs existentes**  
   ```bash
   pnpm assets:optimize
   ```

4. **Atualizar o código que usa o asset**  
   - Ex.: `<Image src="/assets/backgrounds/fracoes.png" />`

5. **Criar PR automaticamente**  
   ```bash
   pnpm assets:pr
   ```

---

## Estrutura de Pastas

```
/codex-assets/
  README.md                 ← este arquivo (instruções)
  assets.yml                ← lista de assets com prompts
  generate-assets.ts        ← script para gerar imagens
  optimize-svgs.ts          ← otimiza SVGs (se houver)
  make-pr.ts                ← cria branch/commit/PR via gh cli
asset-manifest.json         ← manifest gerado/atualizado pelo script
```

Os arquivos finais (imagens) serão salvos em `/assets/...` (fora desta pasta), conforme cada `out` definido no YAML.

---

## Regras para o Codex

- **Sempre leia este README.md** antes de gerar algo.
- **Nunca gere asset sem necessidade explícita** do usuário ou do fluxo do app.
- **Mantenha estilo consistente** (ex.: ícones outline/flat, backgrounds sem texto).
- **Backgrounds**: mínimo 2048x1152 (16:9) para desktop, pode gerar versões menores depois.
- **SVGs**: Se o provider não retorna SVG, gere PNG e substitua por SVG de biblioteca ou vetorize manualmente.
- **Atualize `asset-manifest.json` automaticamente** (o script já faz isso).

### Formato do `assets.yml`

```yml
categoria:
  - id: identificador-unico
    out: caminho/relativo/do/arquivo.png
    prompt: >
      Prompt detalhado...
    size: 2048x1152
    tags: [opcional, lista]
```

Categorias sugeridas: `backgrounds`, `icons`, `mascot`, `badges`, `ui`.

---

## Dependências

- Node 18+
- pnpm ou npm
- TypeScript + ts-node
- OpenAI SDK (ou outro provedor)
- sharp (processamento de imagens raster)
- svgo (para SVG)

```bash
pnpm add -D ts-node typescript @types/node
pnpm add openai sharp js-yaml svgo fast-glob
```

---

## GitHub PR (script `make-pr.ts`)

- Usa **GitHub CLI (`gh`)** para criar PR rapidamente.
- Configure `gh auth login` antes.
- Se preferir Octokit, adapte o script.

---

## Variáveis de Ambiente

Crie `.env` na raiz do projeto (ou use outro mecanismo):

```
OPENAI_API_KEY=...
GIT_AUTHOR_NAME=codex-bot
GIT_AUTHOR_EMAIL=codex@example.com
```

Se for usar S3/CDN, adicione as chaves correspondentes e adapte `generate-assets.ts`.

---

## Checklist rápido

- [ ] Item novo incluído em `assets.yml`  
- [ ] `pnpm assets:gen` rodado sem erros  
- [ ] Asset referenciado no código (componente/página)  
- [ ] `pnpm assets:pr` criado com branch e PR limpos  

---

Feito com ❤ em 2025-07-22T20:38:33.771838Z
