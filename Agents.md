# Lista de Tarefas

1. **Substituir placeholders no `src/App.js`:** remover `...` e implementar a árvore de `<Route>` completa com React Router v6.
2. **Ajustar versões do React:** definir `"react"` e `"react-dom"` como `^18.2.0` no `package.json`.
3. **Limpar dependências no `package.json`:** remover bibliotecas de Node (e.g., `sharp`, `fast-glob`, `js-yaml`, `openai`, `svgo`) de `dependencies`.
4. **Criar arquivo de variáveis de ambiente:** adicionar `.env.local` na raiz com `REACT_APP_*` necessários.
5. **Revisar caminhos de assets e roteamento:** validar uso de `process.env.PUBLIC_URL` e ajustar para caminhos relativos quando apropriado.
6. **Verificar exportações de componentes:** checar todos os arquivos em `src/components` garantindo `export default/import` corretos.
7. **Executar e corrigir build de desenvolvimento:** rodar `npm install` e `npm start`, analisar e resolver erros de console.
8. **Testar build de produção:** rodar `npm run build`, servir via `serve -s build` e corrigir erros de deploy.
9. **Validar funcionalidade de hotspots e imagens:** testar carregamento de cenários em `public/scenes` e caminhos de import.
10. **Documentar ajustes realizados:** atualizar README com instruções de instalação, variáveis e roteamento.

---

# Agents.md

## App Fix Agent Instructions

**Objetivo:** automatizar a correção da aplicação front-end contida em `app.zip`.

**Prompt para o agente:**

> "Analise o repositório front-end da aplicação e execute as seguintes ações:
> 1. Substitua todos os placeholders `...` em `src/App.js` pela definição completa de rotas usando React Router v6.
> 2. Atualize as dependências de `react` e `react-dom` para a versão `^18.2.0` e remova quaisquer dependências de Node que não sejam compatíveis com o ambiente de browser.
> 3. Crie um arquivo `.env.local` com todas as variáveis de ambiente necessárias (ex.: `REACT_APP_OPENAI_KEY`).
> 4. Revise e corrija os caminhos de assets (`PUBLIC_URL` vs. caminhos relativos) para garantir que as imagens em `public/scenes` carreguem corretamente em ambientes de desenvolvimento e produção.
> 5. Verifique todas as exportações e imports de componentes em `src/components` e corrija eventuais erros de módulo não encontrado.
> 6. Execute `npm install` e `npm start`, identifique erros de build ou runtime e corrija-os.
> 7. Execute `npm run build`, sirva a pasta `build` e corrija quaisquer erros de produção.
> 8. Atualize o `README.md` com instruções claras de instalação, configuração de variáveis e uso do aplicativo."

**Expectativa de Entrega:** pull request com todas as correções aplicadas e documentação atualizada, pronto para CI/CD.

