# 5. Transições e Animações

## 5.1 Cenário de Transição
- Uso de `<AnimatePresence>` e `<motion.div>`
- `initial={{ opacity:0 }}` → `animate={{ opacity:1 }}` → `exit={{ opacity:0 }}`

## 5.2 Badge de Vitória
- Badge SVG animado (scale 0→1.2→1)
- Confete: múltiplos `<div>` animados com gravidade simulada

## 5.3 Pergunta → Próxima
- Depois de resposta correta, delay 0.5s, animação de fade-out do modal, fade-in da próxima pergunta

## 5.4 Hover e Click
- Botões com `whileHover={{ scale:1.05 }}` e `whileTap={{ scale:0.95 }}` no Framer Motion
- Hotspot `whileHover={{ scale:1.1 }}` e `transition={{ duration:0.3 }}`