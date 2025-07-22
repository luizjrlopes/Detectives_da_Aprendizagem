# 1. Arquitetura Geral

## Visão do Sistema
O **Aprender é Viver** é um aplicativo em React (create-react-app) que centraliza múltiplos módulos de aprendizado, cada um criado em formato de “investigação” gamificada. O objetivo principal é unir o conteúdo da escola (por exemplo, Frações, Biomas, Corpo Humano, Geometria) com as disciplinas cursadas pelo estudante (Frontend, Lógica, Banco de Dados, DevOps) em uma experiência imersiva.

## Tecnologias
- **Framework**: React (v18.x)  
- **Bibliotecas**:
  - `react-router-dom` para navegação entre módulos
  - `framer-motion` para animações de transição e feedbacks
  - `gh-pages` para deploy no GitHub Pages
- **Gerenciamento de estado**: React Context API para vidas e XP
- **Estilo**: CSS Modules ou styled-components (opcional)
- **Deploy**: GitHub Pages via script `npm run deploy`

## Estrutura de Pastas
```
/
├── public/
│   ├── index.html
│   └── scenes/
│       ├── padaria.jpg
│       ├── floresta.jpg
│       ├── corpo-humano.jpg
│       └── geometria.jpg
├── src/
│   ├── components/
│   │   ├── Layout.js
│   │   ├── Header.js
│   │   ├── FooterNav.js
│   │   ├── Hotspot.js
│   │   └── QuestionModal.js
│   ├── context/
│   │   └── GameContext.js
│   ├── data/
│   │   └── modules.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Module1.js
│   │   ├── Module2.js
│   │   ├── Module3.js
│   │   └── Module4.js
│   ├── App.js
│   └── index.js
└── .docs/
    └── (documentação detalhada)
```

## Padrão de Build e Deploy
1. `npm install`  
2. `npm run build`  
3. `npm run deploy` (configurado em `package.json` com gh-pages)