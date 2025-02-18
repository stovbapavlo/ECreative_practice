import React, { useState } from 'react';
import styles from '../styles/Testimonials.module.css';
import clientImg from '../assets/images/Mask Group.png';

const testimonials = [
  {
    text: `"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."`,
    name: 'Jenny Wilson',
    position: 'Vice President',
  },
  {
    text: `"Amazing experience! The team was professional and delivered great results. Highly recommended!"`,
    name: 'Michael Brown',
    position: 'CEO of TechWave',
  },
  {
    text: `"We loved working with them. They provided outstanding support and top-notch development services!"`,
    name: 'Sarah Connor',
    position: 'Product Manager',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.testimonialContent}>
          <div className={styles.testimonialText}>
            <h3>What our clients say about us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
          <div className={styles.testimonialBox}>
            <h5>{testimonials[currentIndex].text}</h5>
            <div className={styles.testimonialAuthor}>
              <img src={clientImg} alt={testimonials[currentIndex].name} />
              <div>
                <h4>{testimonials[currentIndex].name}</h4>
                <span>{testimonials[currentIndex].position}</span>
              </div>
              <div className={styles.testimonialNav}>
                <button className={styles.prev} onClick={handlePrev}>
                  {'<'}
                </button>
                <button className={styles.next} onClick={handleNext}>
                  {'>'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
