import React, { useState } from 'react';
import styles from '../styles/FAQ.module.css';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState();

  const faqItems = [
    {
      number: '01',
      question: 'How much time does it take?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      number: '02',
      question: 'What is your class naming convention?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      number: '03',
      question: 'How do you communicate?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      number: '04',
      question: 'I have a bigger project. Can you handle it?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      number: '05',
      question: 'What is your class naming convention?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.faqContent}>
          <div className={styles.faqText}>
            <h3>Frequently asked questions</h3>
            <Link to="#">Contact us for more info</Link>
          </div>
          <div className={styles.faqList}>
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => toggleFAQ(index)}>
                <div className={styles.faqWrapper}>
                  <div className={styles.faqNumber}>{item.number}</div>
                  <div className={styles.faqMain}>
                    <div className={styles.faqQuestion}>
                      {item.question}
                      <button className={styles.faqToggle}>
                        {activeIndex === index ? '×' : '+'}
                      </button>
                    </div>
                    {activeIndex === index && <div className={styles.faqAnswer}>{item.answer}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
