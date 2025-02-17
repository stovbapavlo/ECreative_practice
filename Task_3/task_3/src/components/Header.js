import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.title}>FLAT UI COLORS 2</h1>
      </Link>

      <nav className={styles.nav}>
        <Link to="#" className={styles.link}>
          Designer Inspiration
        </Link>
        <Link to="#" className={styles.link}>
          Subscribe
        </Link>
      </nav>
    </header>
  );
};

export default Header;
