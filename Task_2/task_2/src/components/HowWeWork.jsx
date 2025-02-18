import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/HowWeWork.module.css';
import step1 from '../assets/images/pointer 1.png';
import step2 from '../assets/images/pointer 2.png';
import step3 from '../assets/images/pointer 3.png';
import step4 from '../assets/images/pointer 4.png';

const workSteps = [
  {
    img: step1,
    title: 'Strategy',
    description: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
  },
  {
    img: step2,
    title: 'Wireframing',
    description: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
  },
  {
    img: step3,
    title: 'Design',
    description: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
  },
  {
    img: step4,
    title: 'Development',
    description: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.',
  },
];

const HowWeWork = () => {
  return (
    <section className={styles.howWeWork}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2>How we work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to="#">Get in touch with us →</Link>
          </div>
          <div className={styles.workGrid}>
            {workSteps.map((step, index) => (
              <div key={index} className={styles.workItem}>
                <div className={styles.stepContainer}>
                  <img className={styles.stepNumber} src={step.img} alt={`Step ${index + 1}`} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
