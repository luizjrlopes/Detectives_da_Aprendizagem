# Vorya

Este projeto é uma aplicação React que traz mini-jogos educacionais. O código da interface fica no diretório `app/`.

## Instalação

1. Acesse o diretório `app`:
   ```bash
   cd app
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env.local` dentro de `app/` com suas variáveis de ambiente:
   ```bash
   REACT_APP_OPENAI_KEY=sua-chave-aqui
   ```
   Esse arquivo não é versionado e deverá ser criado em todas as máquinas.

## Ambiente de desenvolvimento

Execute o projeto com:
```bash
npm start
```
A aplicação ficará disponível em `http://localhost:3000`.

## Build de produção

Para gerar os arquivos estáticos otimizados:
```bash
npm run build
```
Depois, sirva a pasta `build` (exemplo usando `serve`):
```bash
npx serve -s build
```
Para disponibilizar a aplicação no GitHub Pages execute:
```bash
npm run deploy
```
O `homepage` já está configurado para servir os arquivos de forma relativa,
o que garante que as imagens carregadas em `public/scenes` funcionem tanto
localmente quanto em produção.

### PWA

O projeto inclui `manifest.json` e `service-worker.js` para permitir a instalação
como PWA. Basta acessar o aplicativo em produção e seguir as instruções do
navegador para instalar.

Isso permitirá testar o aplicativo em ambiente de produção local.
