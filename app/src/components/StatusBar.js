import React from 'react';
import { useGame } from '../context/GameContext';
import styles from './Layout.module.css';

export default function StatusBar({ progress }) {
  const { lives, xp } = useGame();
  return (
    <div className={styles.statusbar}>
      <span>Vidas: {lives}</span>
      <span>XP: {xp}</span>
      <progress value={progress} max={1}></progress>
    </div>
  );
}
