// src/components/StatusBar.jsx
import React from 'react';

const StatusBar = ({ hearts, xp, progress }) => (
  <div className="status-bar">
    <span>❤️ {hearts}</span>
    <span>XP {xp}</span>
    <progress value={progress} max="100" />
  </div>
);

export default StatusBar;
