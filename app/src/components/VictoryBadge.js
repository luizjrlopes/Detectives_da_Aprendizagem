import React from 'react';
import { motion } from 'framer-motion';
import ConfettiParticle from './ConfettiParticle';

// Badge exibido ao finalizar o módulo com animação e confete
export default function VictoryBadge() {
  const particles = Array.from({ length: 12 }, (_, i) => (
    <ConfettiParticle key={i} x={`${Math.random() * 100}%`} />
  ));

  return (
    <div className="victory-container">
      <motion.div
        className="badge"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6 }}
      >
        Vitória!
      </motion.div>
      {particles}
    </div>
  );
}
