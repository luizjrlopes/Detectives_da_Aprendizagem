import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import QuestionModal from '../components/QuestionModal';
import Hotspot from '../components/Hotspot';
import VictoryBadge from '../components/VictoryBadge';
import { motion } from 'framer-motion';
import styles from './Module1.module.css';

export default function Module1() {
  // Perguntas do módulo com posições dos hotspots
  const questions = [
    {
      id: 'q1',
      x: '30%',
      y: '40%',
      prompt: 'Que fração da pizza está faltando?',
      options: ['1/4', '1/2', '3/4', '1/8'],
      answer: 0,
    },
    {
      id: 'q2',
      x: '60%',
      y: '50%',
      prompt: 'Quanto é 2/3 + 3/4?',
      options: ['6/7', '17/12', '1', '5/12'],
      answer: 1,
    },
    {
      id: 'q3',
      x: '80%',
      y: '70%',
      prompt: '3/4 equivale a quantos porcento?',
      options: ['50%', '75%', '25%', '100%'],
      answer: 1,
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [finished, setFinished] = useState(false);
  const { lives, addXp, loseLife, resetGame, completeMod } = useGame();
  const navigate = useNavigate();

  // Trata fechamento do modal e avança lógica do jogo
  const handleClose = (correct) => {
    setShowModal(false);
    if (correct) {
      addXp(10);
    } else {
      loseLife();
    }
    if (!correct && lives - 1 <= 0) return; // derrota acontecerá
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      completeMod(1);
      setFinished(true);
    }
  };

  // Tela de derrota
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

  // Tela de vitória
  if (finished) {
    return (
      <div className={styles.endScreen}>
        <VictoryBadge />
        <motion.button
          className={styles.btn}
          onClick={() => navigate('/modulo2')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Próxima Missão
        </motion.button>
      </div>
    );
  }

  return (
    <div
      className={styles.scene}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/scenes/padaria.png)` }}
    >
      {/* Hotspots que disparam as perguntas */}
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

      {/* Modal de pergunta e validação */}
      <QuestionModal
        visible={showModal}
        question={questions[currentQ]}
        onClose={handleClose}
      />
    </div>
  );
}
