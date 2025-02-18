import React from 'react';
import styles from '../styles/Hero.module.css';
import illustration from '../assets/images/Illustration.svg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1>Building stellar websites for early startups</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.buttonYellow}>View our work</button>
            <button className={styles.buttonTransparent}>View Pricing →</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={illustration} alt="Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
