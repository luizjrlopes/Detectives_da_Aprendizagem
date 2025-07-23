import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import QuestionModal from '../components/QuestionModal';
import Hotspot from '../components/Hotspot';
import StatusBar from "../components/StatusBar";
import content from "../data/module_4/content.json";
import VictoryBadge from '../components/VictoryBadge';
import { motion } from 'framer-motion';
import styles from './Module4.module.css';

export default function Module4() {
  const questions = [
    {
      id: 'q1',
      x: '30%',
      y: '40%',
      prompt: 'Qual a área de um retângulo de 4x3?',
      options: ['7', '12', '9', '8'],
      answer: 1,
    },
    {
      id: 'q2',
      x: '55%',
      y: '60%',
      prompt: 'Qual a área de um círculo de raio 7?',
      options: ['49π', '14π', '28', '7π'],
      answer: 0,
    },
    {
      id: 'q3',
      x: '75%',
      y: '30%',
      prompt: 'Perímetro de um triângulo 3,4,5?',
      options: ['12', '9', '10', '15'],
      answer: 0,
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [finished, setFinished] = useState(false);
  const { lives, addXp, loseLife, resetGame, completeMod } = useGame();
  const navigate = useNavigate();

  const handleClose = (correct) => {
    setShowModal(false);
    if (correct) {
      addXp(10);
    } else {
      loseLife();
    }
    if (!correct && lives - 1 <= 0) return;
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      completeMod(4);
      setFinished(true);
    }
  };

  if (lives <= 0) {
    return (
      <div className={styles.endScreen}>
        <h2>Game Over</h2>
        <motion.button
          className={styles.btn}
          onClick={resetGame}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reiniciar
        </motion.button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className={styles.endScreen}>
        <VictoryBadge />
        <motion.button
          className={styles.btn}
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Voltar ao Início
        </motion.button>
      </div>
    );
  }

  return (
    <>
      <StatusBar progress={currentQ / questions.length} />
      <div className={styles.info}>
        <h2>{content.tituloMissao}</h2>
        <p>{content.narrativa}</p>
        <p>{content.objetivo}</p>
      </div>
      <div
        className={styles.scene}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/scenes/geometria.png)` }}
      >
      {questions.map((q, i) => (
        <Hotspot
          key={q.id}
          x={q.x}
          y={q.y}
          onClick={() => {
            setCurrentQ(i);
            setShowModal(true);
          }}
        />
      ))}

      <QuestionModal
        visible={showModal}
        question={questions[currentQ]}
        clue={content.hotspots[currentQ].descricao}
        onClose={handleClose}
      />
      </div>
    </>
  );
}
