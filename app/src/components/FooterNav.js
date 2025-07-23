import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

export default function FooterNav() {
  return (
    <nav className="footernav">
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Missão
      </motion.button>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Menu
      </motion.button>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Perfil
      </motion.button>
    </nav>
  );
}
