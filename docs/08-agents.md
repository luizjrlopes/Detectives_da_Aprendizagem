# 8. Agents (Tarefas)

Este documento define as **tarefas** (agents) para orientar o GitHub Copilot/Codex a gerar o aplicativo passo a passo.

## Tarefa 1: Setup Inicial
- **Objetivo**: Criar o repositório vazio, scaffold com Create React App e instalar dependências.
- **Resultados Esperados**:
  - Estrutura básica do CRA criada.
  - Dependências: react-router-dom, framer-motion, gh-pages.

## Tarefa 2: Configuração de Deploy
- **Objetivo**: Configurar scripts e homepage no package.json para deploy no GitHub Pages.
- **Resultados Esperados**:
  - `homepage` apontando para a URL GitHub Pages.
  - Scripts `predeploy` e `deploy`.
  - gh-pages instalado como devDependency.

## Tarefa 3: Estrutura de Pastas
- **Objetivo**: Criar pastas conforme .docs/01-architecture.md:
  - public/scenes
  - src/components
  - src/pages
  - src/context
  - src/data
- **Resultados Esperados**:
  - Estrutura de pastas criada, arquivos README.md placeholder em cada.

## Tarefa 4: Roteamento
- **Objetivo**: Implementar React Router:
  - `Routes` para Home (`/`), Module1–4.
  - Componente `<Layout>` envolvendo `Header` e `FooterNav`.
- **Resultados Esperados**:
  - Navegação funcional entre rotas.

## Tarefa 5: Contexto de Jogo
- **Objetivo**: Criar `GameContext` para armazenar vidas e XP.
- **Resultados Esperados**:
  - Provider configurado em `src/context/GameContext.js`.
  - Hook `useGame()` disponível.

## Tarefa 6: Componente Home
- **Objetivo**: Implementar `Home.js`:
  - Lista de cartões com preview dos módulos.
  - Each card links to `/moduloX`.
- **Resultados Esperados**:
  - Layout mobile-friendly.

## Tarefa 7: Implementar Módulos
- **Objetivo**: Para cada módulo (Module1–4):
  - Criar `ModuleX.js` seguindo .docs/02-modules.md.
  - Hotspots, QuestionModal, lógica de missão (lives, XP).
- **Resultados Esperados**:
  - Módulos interativos sem falhas.

## Tarefa 8: Animações e Transições
- **Objetivo**: Incluir animações com Framer Motion conforme .docs/05-transitions.md.
- **Resultados Esperados**:
  - Transições de cena, badge, hover/tap animados.

## Tarefa 9: UI e Style Guide
- **Objetivo**: Aplicar guia de estilo do .docs/06-style-guide.md em CSS Modules ou styled-components.
- **Resultados Esperados**:
  - Cores, tipografia, espaçamentos conforme especificado.

## Tarefa 10: Deploy Final
- **Objetivo**: Realizar deploy com `npm run deploy` e validar no GitHub Pages.
- **Resultados Esperados**:
  - Aplicativo disponível publicamente em https://<usuário>.github.io/<repo>/

---
Pronto! A cada etapa, basta apontar o Codex para este arquivo e ele criará a parte correspondente de forma exata.
