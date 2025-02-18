import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/images/Logo.svg';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <img src={logo} alt="Finsweet Logo" className={styles.logo} />
          <ul className={styles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="#">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
          </ul>
          <button className={`${styles.button} ${styles.contactButton}`}>Contact us</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
