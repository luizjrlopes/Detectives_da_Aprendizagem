import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import FooterNav from './FooterNav';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <FooterNav />
    </div>
  );
}
