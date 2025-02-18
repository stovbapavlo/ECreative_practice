import React from 'react';
import styles from '../styles/WhoWeAre.module.css';
import whoWeAreImage from '../assets/images/who-we-are.png';

const WhoWeAre = () => {
  return (
    <section className={styles.whoWeAre}>
      <div className={styles.container}>
        <div className={styles.whoTop}>
          <div className={styles.whoContent}>
            <div className={styles.whoText}>
              <div className={styles.whoBoxLeft}>
                <h2 className={styles.sectionTitle}>Who we are</h2>
                <h3>Goal focussed</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className={styles.whoBox}>
                <h3>Continuous improvement</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.whoImage}>
          <img src={whoWeAreImage} alt="Team discussion" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
