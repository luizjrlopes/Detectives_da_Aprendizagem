import React from 'react';
import { motion } from 'framer-motion';
import styles from './Layout.module.css';

export default function FooterNav() {
  return (
    <nav className={styles.footernav}>
      <motion.button
        className={styles.btn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Missão
      </motion.button>
      <motion.button
        className={styles.btn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Menu
      </motion.button>
      <motion.button
        className={styles.btn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Perfil
      </motion.button>
    </nav>
  );
}
