// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import module1 from '../data/module1/content.json';
import module2 from '../data/module2/content.json';
import module3 from '../data/module3/content.json';
import module4 from '../data/module4/content.json';

const modules = [module1, module2, module3, module4];

const Dashboard = () => (
  <div className="dashboard">
    <h2>Módulos</h2>
    <ul>
      {modules.map((m, i) => (
        <li key={i}>
          <Link to={`/modulo/${i + 1}`}>{m.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Dashboard;
