# 7. Deploy no GitHub Pages

## Configuração Inicial
1. Adicione no `package.json`:
   ```json
   "homepage": "https://<seu-usuario>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Instale `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```

## Fluxo de Deploy
1. Commit das alterações:
   ```bash
   git add .
   git commit -m "Add deployment config"
   ```
2. Push no GitHub:
   ```bash
   git push origin main
   ```
3. Rodar deploy:
   ```bash
   npm run deploy
   ```

## Acesso
- Acesse `https://<seu-usuario>.github.io/<repo-name>/`
- Para atualizações futuras, repita `npm run deploy`

---

**Observações**:
- Evite credenciais no código
- Publique apenas os arquivos de build (diretório `build/`)
- Você pode configurar **Github Actions** para automatizar deploy a cada push no `main`