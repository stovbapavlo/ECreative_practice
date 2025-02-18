import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/ContactPanel.module.css';
import contactImage from '../assets/images/Start Convert.png';

const ContactPanel = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    figmaUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your inquiry has been sent.`);
    setFormData({ name: '', email: '', figmaUrl: '' });
  };

  return (
    <section className={styles.contactPanel}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={styles.contactBlock}>
            <img
              src={contactImage}
              alt="Building stellar websites"
              className={styles.contactImage}
            />
            <div className={styles.contactForm}>
              <h5>Send inquiry</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="figmaUrl"
                  placeholder="Paste your Figma design URL"
                  value={formData.figmaUrl}
                  onChange={handleChange}
                />
                <button type="submit">Send an Inquiry</button>
                <Link to="#">Get in touch with us →</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPanel;
