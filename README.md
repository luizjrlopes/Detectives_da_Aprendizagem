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
3. Crie um arquivo `.env.local` na raiz do repositório (ou dentro de `app/`) contendo suas variáveis:
   ```bash
   REACT_APP_OPENAI_KEY=
   ```

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

### PWA

O projeto inclui `manifest.json` e `service-worker.js` para permitir a instalação
como PWA. Basta acessar o aplicativo em produção e seguir as instruções do
navegador para instalar.

Isso permitirá testar o aplicativo em ambiente de produção local.
