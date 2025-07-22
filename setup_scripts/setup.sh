#!/usr/bin/env bash
set -euo pipefail

#
# Tarefa 1: Scaffold React + dependências + Git flow + PR
#

# 1. Criar o React App em /app
npm install -g create-react-app
npx create-react-app app

# 2. Entrar em /app e instalar dependências de rota, animações e deploy
cd app
npm install react-router-dom framer-motion gh-pages

# 3. Configurar deploy no GitHub Pages
npm pkg set homepage="https://luizjrlopes.github.io/Detetives_da_Aprendizagem"
npm pkg set scripts.predeploy="npm run build"
npm pkg set scripts.deploy="gh-pages -d build"

# 4. Garantir todas as dependências instaladas
npm install

# 5. Voltar à raiz do repositório
cd ..

# 6. Inicializar Git e configurar remote
if [ ! -d .git ]; then
  git init
fi
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/luizjrlopes/Detetives_da_Aprendizagem.git

# 7. Criar e trocar para a branch de feature
git checkout -B feat/scaffold-detetives

# 8. Adicionar apenas a pasta /app
git add app/

# 9. Commitar as mudanças
git commit -m "chore: scaffold React app in /app with CRA and install dependencies"

# 10. Push para o GitHub
git push -u origin feat/scaffold-detetives --force

# 11. Abrir Pull Request automaticamente
gh pr create   --repo luizjrlopes/Detetives_da_Aprendizagem   --head feat/scaffold-detetives   --base main   --title "chore: scaffold React app"   --body "Este PR adiciona o scaffold inicial do Create React App em /app e instala react-router-dom, framer-motion e gh-pages para deploy."   --label "auto-generated"   --assignee "@me"   --reviewer "@me"   --confirm

echo "✅ Scaffold React criado em /app, branch feat/scaffold-detetives publicada e PR aberta!"
