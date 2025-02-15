import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';
import logo from '../assets/images/Logo.svg';
import socialMediaLogo from '../assets/icons/socialMediaIcon.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <div className={styles.footerLogo}>
                <img src={logo} alt="Finsweet Logo" />
              </div>
              <p>We are always open to discuss your project and improve your online presence.</p>
            </div>
            <div className={styles.footerRight}>
              <h2 className={styles.footerTitle}>Let's Talk!</h2>
              <p>
                We are always open to discuss your project, improve your online presence and help
                with your UX/UI design challenges.
              </p>
              <div className={styles.footerSocials}>
                <Link to="#">
                  <img src={socialMediaLogo} alt="Facebook" />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.footerContact}>
            <div className={styles.contactBox}>
              <p className={styles.contactLabel}>Email me at</p>
              <p className={styles.contactInfo}>contact@website.com</p>
            </div>
            <div className={styles.contactBox}>
              <p className={styles.contactLabel}>Call us</p>
              <p className={styles.contactInfo}>0927 6277 28525</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.footerNavbar}>
            <p>Copyright 2022, Finsweet.com</p>
            <ul className={styles.footerNavList}>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
