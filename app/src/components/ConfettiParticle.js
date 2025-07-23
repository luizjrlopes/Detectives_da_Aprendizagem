import React from 'react';
import { motion } from 'framer-motion';

// Partícula individual de confete usada no badge de vitória
export default function ConfettiParticle({ x }) {
  const colors = ['#f1c40f', '#e67e22', '#1abc9c', '#e74c3c'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <motion.div
      className="confetti"
      style={{ left: x, backgroundColor: color }}
      initial={{ opacity: 1, y: 0, rotate: 0 }}
      animate={{ opacity: 0, y: 120, rotate: 360 }}
      transition={{ duration: 1.2 }}
    />
  );
}
