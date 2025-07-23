import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ConfettiParticle from './ConfettiParticle';
import styles from './QuestionModal.module.css';

export default function QuestionModal({ visible, question, clue, onClose }) {
  const [result, setResult] = useState(null); // true = correto, false = incorreto

  useEffect(() => {
    if (!visible) setResult(null); // reseta estado ao fechar
  }, [visible]);

  if (!question) return null;

  const handleClick = (correct) => {
    setResult(correct);
    setTimeout(() => onClose(correct), 500);
  };

  const confetti =
    result === true
      ? Array.from({ length: 8 }, (_, i) => (
          <ConfettiParticle key={i} x={`${Math.random() * 100}%`} />
        ))
      : null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              ...(result === false
                ? { x: [-10, 10, -10, 10, 0] }
                : {}),
            }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: result === false ? 0.5 : 0.4 }}
          >
            <h2>{question.prompt}</h2>
            {clue && <p className={styles.clue}>{clue}</p>}
            <div className={styles.options}>
              {result === true && (
                <motion.div
                  className={styles.badge}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  Acertou!
                </motion.div>
              )}
              {confetti}
              {question.options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  className={styles.btn}
                  onClick={() => handleClick(idx === question.answer)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {opt}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
