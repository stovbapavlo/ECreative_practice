import React from 'react';
import styles from '../styles/MissionVision.module.css';
import missionImage from '../assets/images/mission.png';
import visionImage from '../assets/images/vision.png';

const MissionVision = () => {
  return (
    <section className={styles.missionVision}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textBlock}>
            <h4>Our Mission</h4>
            <h2>Inspire, Innovate, Share</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img src={missionImage} alt="Our Mission" />
          </div>
        </div>

        <div className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.imageBlock}>
            <img src={visionImage} alt="Our Vision" />
          </div>
          <div className={styles.textBlock}>
            <h4>Our Vision</h4>
            <h2>Laser focus</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
