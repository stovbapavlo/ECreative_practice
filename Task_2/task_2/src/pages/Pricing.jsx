import React from 'react';
import PricingCard from '../components/PricingCard';
import FAQ from '../components/FAQ';
import styles from '../styles/Pricing.module.css';

import pointerIcon from '../assets/icons/Pointer.png';
import pointerDimmedIcon from '../assets/icons/Pointer0.png';

const Pricing = () => {
  const pricingPlans = [
    {
      price: '$299',
      priceTag: 'Per Design',
      title: 'Landing Page',
      description: 'When you’re ready to go beyond prototyping in Figma.',
      features: [
        { icon: pointerIcon, text: 'All limited links' },
        { icon: pointerIcon, text: 'Own analytics platform' },
        { icon: pointerIcon, text: 'Chat support' },
        { icon: pointerDimmedIcon, text: 'Optimize hashtags', dimmed: true },
        { icon: pointerDimmedIcon, text: 'Unlimited users', dimmed: true },
      ],
      buttonText: 'Get started',
      isFeatured: false,
    },
    {
      price: '$399',
      priceTag: 'Multi Design',
      title: 'Website Page',
      description: 'When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.',
      features: [
        { icon: pointerIcon, text: 'All limited links' },
        { icon: pointerIcon, text: 'Own analytics platform' },
        { icon: pointerIcon, text: 'Chat support' },
        { icon: pointerIcon, text: 'Optimize hashtags' },
        { icon: pointerIcon, text: 'Unlimited users' },
      ],
      buttonText: 'Get started',
      isFeatured: true,
    },
    {
      price: '$499+',
      priceTag: 'Per Design',
      title: 'Complex Project',
      description: 'When you’re ready to go beyond prototyping in Figma.',
      features: [
        { icon: pointerIcon, text: 'All limited links' },
        { icon: pointerIcon, text: 'Own analytics platform' },
        { icon: pointerIcon, text: 'Chat support' },
        { icon: pointerIcon, text: 'Optimize hashtags' },
        { icon: pointerIcon, text: 'Unlimited users' },
        { icon: pointerIcon, text: 'Assist and help' },
      ],
      buttonText: 'Contact us',
      isFeatured: false,
    },
  ];

  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <h2 className={styles.pricingTitle}>Our Pricing Plans</h2>
        <p className={styles.pricingDescription}>
          When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring
          your designs to life — without coding them.
        </p>
        <div className={styles.pricingCards}>
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
      <FAQ />
    </section>
  );
};

export default Pricing;
