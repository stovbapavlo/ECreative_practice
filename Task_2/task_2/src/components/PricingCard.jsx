import React from 'react';
import styles from '../styles/PricingCard.module.css';

const PricingCard = ({ price, priceTag, title, description, features, buttonText, isFeatured }) => {
  return (
    <div className={`${styles.pricingCard} ${isFeatured ? styles.featured : ''}`}>
      <h3 className={`${styles.price} ${isFeatured ? styles.featuredPrice : ''}`}>
        {price}{' '}
        <span className={`${styles.priceTag} ${isFeatured ? styles.featuredTag : ''}`}>
          {priceTag}
        </span>
      </h3>
      <h4 className={styles.planTitle}>{title}</h4>
      <p className={`${styles.priceDescription} ${isFeatured ? styles.featuredDescription : ''}`}>
        {description}
      </p>
      <ul className={styles.planFeatures}>
        {features.map((feature, index) => (
          <li key={index} className={feature.dimmed ? styles.dimmedFeature : ''}>
            <img src={feature.icon} alt="Feature Icon" />
            {feature.text}
          </li>
        ))}
      </ul>
      <div className={styles.heroButtons}>
        <button className={`${styles.pricingButton} ${isFeatured ? styles.buttonYellow : ''}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
