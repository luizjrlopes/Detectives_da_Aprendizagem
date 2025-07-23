# 🕵️ Agents para o App Zorya

Este documento descreve agentes especializados para apoiar o desenvolvimento, polimento e operação do **App Zorya** (o protótipo de investigação pedagógica). Cada agente foca em uma camada crítica do produto, garantindo modularidade e excelência.

---

## 1. ComponentAgent  
**Objetivo:** Estruturar e manter a arquitetura de componentes React do app.  
**Responsabilidades:**  
- Criar e refatorar componentes funcionais (Layout, QuestionCard, ClueHotspot).  
- Implementar rotas com React Router.  
- Garantir modularização, reuso e legibilidade de código.  
- Integrar Framer Motion para animações básicas.

---

## 2. ContentAgent  
**Objetivo:** Gerenciar conteúdo de cada cena e pista no formato JSON.  
**Responsabilidades:**  
- Definir esquema de `scenes.json` (imagens, hotspots, descrições).  
- Validar coerência pedagógica (níveis de dificuldade e alinhamento curricular).  
- Fornecer dados dinâmicos para componentes de perguntas e hotspots.

---

## 3. InteractionAgent  
**Objetivo:** Projetar e implementar as mecânicas de investigação (click‑&‑inspect, drag‑&‑drop, puzzles).  
**Responsabilidades:**  
- Desenvolver lógica de detecção de hotspots e registro de pistas.  
- Criar modais de feedback (QuestãoModal).  
- Controlar fluxo de jogo: vidas, pontuação e progresso.

---

## 4. DesignAgent  
**Objetivo:** Elevar a identidade visual, tema e UX do app.  
**Responsabilidades:**  
- Definir paleta de cores, tipografia e assets SVG/PNG.  
- Criar wireframes e protótipos de alta fidelidade.  
- Especificar animações avançadas com Framer Motion (entradas, exits, micro‑interações).

---

## 5. PerformanceAgent  
**Objetivo:** Otimizar o app para PWA, caching e métricas de uso.  
**Responsabilidades:**  
- Configurar `service-worker.js` e `manifest.json`.  
- Implementar lazy‑loading de assets e code splitting.  
- Registrar eventos-chave (cliques em hotspots, tempo de interação) em localStorage e Chart.js.

---

## 6. QAAgent  
**Objetivo:** Assegurar qualidade, acessibilidade e testes automatizados.  
**Responsabilidades:**  
- Escrever testes unitários (Jest) para lógica de jogo.  
- Validar acessibilidade (WCAG) e semântica HTML.  
- Realizar testes de usabilidade e performance (Lighthouse).

---

> Com esses agentes definidos, podemos avançar para a criação dos prompts específicos do **PromptAgent**, automatizando geração de narrativas, pistas e adaptação de conteúdo para cada módulo.

