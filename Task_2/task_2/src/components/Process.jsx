import React from 'react';
import styles from '../styles/Process.module.css';
import stepIcon from '../assets/images/Circle.png';

const steps = [
  { title: 'Planning', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Conception', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const Process = () => {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <h2 className={styles.processTitle}>The process we follow</h2>
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <img src={stepIcon} alt="Step Icon" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
