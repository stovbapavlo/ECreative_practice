import React from 'react';
import styles from '../styles/AboutHero.module.css';
import aboutTeamImage from '../assets/images/about-team.png';

const AboutHero = () => {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <p className={styles.sectionLabel}>About us</p>
          <h1>Our designs solve problems</h1>
          <p className={styles.aboutDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <img src={aboutTeamImage} alt="Team working together" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
