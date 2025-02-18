import React from 'react';
import styles from '../styles/Benefits.module.css';
import iconCustomize from '../assets/icons/Icon06.png';
import iconResponsive from '../assets/icons/Icon03.png';
import iconSupport from '../assets/icons/Icon01.png';
import logoWrapper from '../assets/images/Logo Wrapper.png';

const benefitsData = [
  {
    icon: iconCustomize,
    title: 'Customize with ease',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
  },
  {
    icon: iconResponsive,
    title: 'Perfectly Responsive',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
  },
  {
    icon: iconSupport,
    title: 'Friendly Support',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
  },
];

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.benefitsHeader}>
          <h2>The benefits of working with us</h2>
        </div>
        <div className={styles.benefitsGrid}>
          {benefitsData.map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <img src={benefit.icon} alt={benefit.title} />
              <h6>{benefit.title}</h6>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.benefitsFooter}>
          <div className={styles.benefitsUsers}>
            <h3>100.000+</h3>
            <p>Finsweet Users</p>
          </div>
          <div className={styles.logoWrapper}>
            <img src={logoWrapper} alt="Logos" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
