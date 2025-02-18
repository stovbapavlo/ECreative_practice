import React from 'react';
import styles from '../styles/Team.module.css';
import ceoImage from '../assets/images/CEO.png';
import ctoImage from '../assets/images/CTO.png';
import designLeadImage from '../assets/images/Design Leader.png';
import projectManagerImage from '../assets/images/projest manager.png';
import facebookIcon from '../assets/icons/Facebook.png';
import twitterIcon from '../assets/icons/Twitter.png';
import linkedinIcon from '../assets/icons/LinkedIn.png';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO',
    image: ceoImage,
  },
  {
    name: 'Simon Adams',
    role: 'CTO',
    image: ctoImage,
  },
  {
    name: 'Paul Jones',
    role: 'Design Lead',
    image: designLeadImage,
  },
  {
    name: 'Sara Hardin',
    role: 'Project Manager',
    image: projectManagerImage,
  },
];

const Team = () => {
  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <h2 className={styles.teamTitle}>Meet our team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.teamPhotoWrapper}>
                <img src={member.image} alt={member.name} className={styles.teamPhoto} />
                <div className={styles.socialsOverlay}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
