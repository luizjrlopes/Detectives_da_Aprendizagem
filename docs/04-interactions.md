# 4. Interações

## 4.1 Hotspot
- Componente `<Hotspot x={...} y={...} questionId={...} />`
- Ao hover: animação de pulso (scale 1.1)
- Ao click: dispara `<QuestionModal>`

## 4.2 QuestionModal
- Exibe pergunta (`prop.question`) e opções (`prop.options`)
- Botões:
  - Estado inicial: neutro
  - Ao hover: background claro
  - Clique: adiciona classe `correct` ou `incorrect`
- Animação de entrada: fade-in com Framer Motion
- Animação de saída: slide-out

## 4.3 Painel de Pistas e Painel de Missão
- Sidebar à direita com lista `<ul>` de pistas coletadas ou respostas corretas
- Botão “Resolver Cofre” ou “Resolver Caso” habilitado apenas após todas as pistas

## 4.4 Feedback e Áudio
- Uso de áudio (clique, erro, vitória) via HTML5 `<audio>`
- Sons: `pop.mp3`, `error.mp3`, `victory.mp3`
- Feedback visual: animações CSS/JS (confete, shake cofre)