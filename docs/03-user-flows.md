# 3. Fluxos de Usuário

## 3.1 Fluxo Geral
1. Usuário acessa `/` (Home)
2. Seleciona um módulo (Módulo 1 a 4)
3. Transição animada para `/moduloX`
4. Inicia a “Missão” com 3 vidas e 0 XP
5. Navega entre hotspots ou perguntas
6. Coleta pistas/respostas e ganha XP
7. Se zerar vidas, reinicia missão
8. Ao concluir todas as perguntas, exibe tela de vitória
9. Botão “Próxima Missão” leva ao módulo seguinte ou Home

## 3.2 Detalhes de Interação
- **Home → Módulo**: Clique em card, anima fade-out/in
- **Hotspot → QuestionModal**: Clique exibe modal com pergunta
- **QuestionModal → Feedback**: Feedback colorido (verde/vermelho), animação de confete ou shake
- **Progressão**: Barra de progresso aumenta a cada acerto
- **Vitória**: Tela de conclusão com badge animado e confete (Framer Motion)