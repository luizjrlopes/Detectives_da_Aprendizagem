import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import FooterNav from './FooterNav';
import '../App.css';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <FooterNav />
    </div>
  );
}
