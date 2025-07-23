import React from 'react';
// Navegacao entre rotas
import { useNavigate } from 'react-router-dom';
// Animacoes de hover
import { motion } from 'framer-motion';
// Estilos da pagina
import styles from './Home.module.css';

// Dados dos modulos a serem exibidos no dashboard
const modules = [
  {
    id: 1,
    title: 'Missão Cofre Secreto',
    desc: 'Frações divertidas',
    img: 'padaria.png',
    path: '/modulo1',
  },
  {
    id: 2,
    title: 'Missão Biosfera Secreta',
    desc: 'Biomas misteriosos',
    img: 'floresta.png',
    path: '/modulo2',
  },
  {
    id: 3,
    title: 'Missão Corpo Vivo',
    desc: 'Anatomia rápida',
    img: 'anatomia.png',
    path: '/modulo3',
  },
  {
    id: 4,
    title: 'Missão Formas Secretas',
    desc: 'Geometria lúdica',
    img: 'geometria.png',
    path: '/modulo4',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const base = process.env.PUBLIC_URL + '/scenes/';

  return (
    // Layout em grid responsivo contendo os modulos
    <div className={styles.grid}>
      {modules.map((mod) => (
        <motion.div
          key={mod.id}
          className={styles.card}
          whileHover={{ scale: 1.03 }}
        >
          {/* Imagem representando o modulo */}
          <img
            src={`${base}${mod.img}`}
            alt={mod.title}
            className={styles.image}
          />
          <div className={styles.content}>
            <h2 className={styles.title}>{mod.title}</h2>
            <p className={styles.desc}>{mod.desc}</p>
            {/* Botao que navega para a rota do modulo */}
            <motion.button
              className={styles.button}
              onClick={() => navigate(mod.path)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Missão
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
