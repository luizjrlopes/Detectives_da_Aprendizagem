import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../App.css';

export default function QuestionModal({ visible, question, onClose }) {
  if (!question) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2>{question.prompt}</h2>
            <div className="options">
              {question.options.map((opt, idx) => (
                <button key={idx} onClick={() => onClose(idx === question.answer)}>
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
