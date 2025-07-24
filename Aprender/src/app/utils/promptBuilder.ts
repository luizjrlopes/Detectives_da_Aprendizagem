export function buildPrompt(disciplinas: any, conteudos: any) {
  return `Você estudou: ${disciplinas.join(
    ", "
  )} e deseja aplicar PEX com alunos que estudam: ${conteudos.join(", ")}.
Gere 3 ideias de aplicativos educativos simples que integrem esses conteúdos usados nas disciplinas.`;
}
