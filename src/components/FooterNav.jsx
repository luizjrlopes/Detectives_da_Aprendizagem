// src/components/FooterNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav = ({ moduleId }) => (
  <nav className="footer-nav">
    <button onClick={() => window.location.reload()}>Missão</button>
    <Link to="/">Menu</Link>
    <button>Perfil</button>
  </nav>
);

export default FooterNav;
