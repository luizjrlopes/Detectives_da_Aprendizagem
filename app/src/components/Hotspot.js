import React from 'react';
import { motion } from 'framer-motion';

// Hotspot clicável usado dentro dos módulos
export default function Hotspot({ x, y, onClick }) {
  return (
    <motion.div
      className="hotspot"
      style={{ left: x, top: y }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
    />
  );
}
