Guia de Integração do App Zorya – Módulos Interativos
Este documento reúne todas as instruções e exemplos para transformar o protótipo estático do App Zorya num ambiente totalmente interativo, utilizando o JSON dinâmico criado (content.json) e sobrepondo hotspots clicáveis/arrastáveis sobre a cena.

1. Estrutura de Arquivos por Módulo
   pgsql
   Copiar código
   app/
   └─ src/
   └─ data/
   └─ moduleX/
   ├─ content.json ← JSON de conteúdo dinâmico
   └─ components/
   └─ ModulePage.jsx ← Componente principal da missão
   └─ assets/
   └─ sceneX.jpg ← Imagem de fundo da cena
   ├─ style.css ← Estilos compartilhados
   ├─ script.js ← (se não usar React) Lógica de hotspots
   └─ index.js ← Entry point (React ou vanilla)
2. content.json (exemplo do Módulo 1)
   json
   Copiar código
   {
   "tituloMissao": "Missão Cofre Fracionário",
   "narrativa": "Na padaria do campus, um cofre guarda receitas valiosas...",
   "objetivo": "Descubra 3 pistas de frações e calcule o código que libera o cofre.",
   "hotspots": [
   {
   "id": "hotspot1",
   "descricao": "A pizza recém-saída do forno tem um pedaço faltando.",
   "conceito": "1/4",
   "tipoInteracao": "click",
   "x": 20,
   "y": 55
   },
   {
   "id": "hotspot2",
   "descricao": "Na balança, medidas diferentes precisam ser somadas.",
   "conceito": "2/3 + 1/6",
   "tipoInteracao": "click",
   "x": 65,
   "y": 40
   },
   {
   "id": "hotspot3",
   "descricao": "O painel do cofre pede que você converta a fração final em porcentagem.",
   "conceito": "3/5 → 60%",
   "tipoInteracao": "drag",
   "x": 80,
   "y": 70
   }
   ],
   "desafioFinal": "Use as três pistas para calcular o valor correto e abrir o cofre."
   }
   Importante: Os valores x e y são coordenadas percentuais que posicionam cada hotspot sobre a imagem.

3. Componente React Exemplo (ModulePage.jsx)
   jsx
   Copiar código
   import React, { useState } from 'react';
   import content from '../data/module1/content.json';
   import sceneImage from '../assets/scene1.jpg';
   import './style.css';

export default function ModulePage() {
const { tituloMissao, narrativa, objetivo, hotspots, desafioFinal } = content;
const [found, setFound] = useState([]);
const [active, setActive] = useState(null);

const handleClick = h => {
if (!found.includes(h.id)) {
setFound(f => [...f, h.id]);
setActive(h);
}
};

return (
<div className="module-page">
{/_ 1. Cabeçalho _/}
<header className="header">
<h1>Detetives da Aprendizagem</h1>
</header>

      {/* 2. Introdução */}
      <section className="intro">
        <h2>{tituloMissao}</h2>
        <p>{narrativa}</p>
        <p className="objective"><em>{objetivo}</em></p>
      </section>

      {/* 3. Cena e Hotspots */}
      <div className="scene-container" style={{ position: 'relative' }}>
        <img src={sceneImage} alt="Cena do módulo" className="scene-image" />
        {hotspots.map(h => (
          <div
            key={h.id}
            className={`hotspot ${found.includes(h.id) ? 'found' : ''}`}
            style={{
              position: 'absolute',
              top: `${h.y}%`,
              left: `${h.x}%`,
            }}
            onClick={() => handleClick(h)}
            title={h.conceito}
          />
        ))}
      </div>

      {/* 4. Tooltip de Pista */}
      {active && (
        <div className="tooltip">
          <h3>Pista Encontrada</h3>
          <p>{active.descricao}</p>
          <button onClick={() => setActive(null)}>Fechar</button>
        </div>
      )}

      {/* 5. Desafio Final */}
      {found.length === hotspots.length && (
        <section className="final-challenge">
          <h2>Desafio Final</h2>
          <p>{desafioFinal}</p>
        </section>
      )}

      {/* 6. Rodapé de Navegação */}
      <footer className="footer-nav">
        <button onClick={() => window.history.back()}>← Menu</button>
        <button>Perfil</button>
      </footer>
    </div>

);
} 4. CSS Básico (style.css)
css
Copiar código
.header {
background: #333; color: #f1c40f; padding: 1rem; text-align: center;
}
.intro { background: #444; color: #fff; padding: 1rem; }
.objective { margin-top: 0.5rem; }
.scene-container { margin: 1rem 0; }
.scene-image { width: 100%; border-radius: 8px; }
.hotspot {
width: 40px; height: 40px; background: rgba(241,196,15,0.8);
border-radius: 50%; cursor: pointer; transition: transform 0.2s;
}
.hotspot:hover { transform: scale(1.2); }
.hotspot.found { background: rgba(39,174,96,0.8); }
.tooltip {
position: fixed; bottom: 20%; left: 50%; transform: translateX(-50%);
background: #222; color: #fff; padding: 1rem; border-radius: 8px;
}
.final-challenge { background: #2c3e50; color: #f1c40f; padding: 1rem; margin: 1rem; }
.footer-nav {
display: flex; justify-content: space-around; background: #333; padding: 0.5rem 0;
}
.footer-nav button { background: #f1c40f; border: none; padding: 0.5rem 1rem; } 5. Passos Finais
Repetir este padrão para os módulos 2, 3 e 4, importando o respectivo content.json e sceneX.jpg.

Testar interatividade: clique nos hotspots, valide o tooltip e veja o desafio final aparecer.

Ajustar coordenadas x/y no JSON até que os pontos fiquem alinhados na cena.

Polir com animações (Framer Motion) e adicionar som ou transições conforme desejado.

Com este documento, você tem o fluxo completo: desde o JSON dinâmico até o componente React e o CSS, garantindo que o app deixe de ser estático e se torne uma verdadeira experiência interativa. Qualquer dúvida, estou à disposição!
