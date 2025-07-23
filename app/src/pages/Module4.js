import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import QuestionModal from '../components/QuestionModal';
import { motion } from 'framer-motion';
import '../App.css';

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
      <div className="end-screen">
        <h2>Game Over</h2>
        <button onClick={resetGame}>Reiniciar</button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="end-screen">
        <h2>Missão Completa!</h2>
        <button onClick={() => navigate('/')}>Voltar ao Início</button>
      </div>
    );
  }

  return (
    <div
      className="scene"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/scenes/geometria.png)` }}
    >
      {questions.map((q, i) => (
        <motion.div
          key={q.id}
          className="hotspot"
          style={{ left: q.x, top: q.y }}
          onClick={() => {
            setCurrentQ(i);
            setShowModal(true);
          }}
          whileHover={{ scale: 1.2 }}
        />
      ))}

      <QuestionModal
        visible={showModal}
        question={questions[currentQ]}
        onClose={handleClose}
      />
    </div>
  );
}
