import React from 'react';
import styles from '../styles/Features.module.css';
import icon1 from '../assets/icons/Icon01.png';
import icon2 from '../assets/icons/Icon02.png';
import icon3 from '../assets/icons/Icon03.png';
import icon4 from '../assets/icons/Icon04.png';
import icon5 from '../assets/icons/Icon05.png';
import icon6 from '../assets/icons/Icon06.png';

const featuresData = [
  {
    img: icon1,
    title: 'Uses Client First',
    desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
  },
  {
    img: icon2,
    title: 'Two Free Revision Round',
    desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
  },
  {
    img: icon3,
    title: 'Template Customization',
    desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
  },
  {
    img: icon4,
    title: '24/7 Support',
    desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
  },
  {
    img: icon5,
    title: 'Quick Delivery',
    desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
  },
  {
    img: icon6,
    title: 'Hands-on approach',
    desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ',
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.featuresHeader}>
          <p>Features</p>
          <h2>Design that solves problems, one product at a time</h2>
        </div>
        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <img src={feature.img} alt={feature.title} />
              <h6>{feature.title}</h6>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
