import React from 'react';
import styles from '../styles/Projects.module.css';
import projectLarge from '../assets/images/ProjectCard.png';
import projectSmall1 from '../assets/images/ProjectCard2.png';
import projectSmall2 from '../assets/images/ProjectCard3.png';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.projectsHeader}>
          <h2>View our projects</h2>
          <Link to="#">View More →</Link>
        </div>
        <div className={styles.projectsGrid}>
          <div className={`${styles.project} ${styles.projectLarge}`}>
            <img src={projectLarge} alt="Project 1" />
            <div className={`${styles.overlay} ${styles.overlayLarge}`}>
              <h3>Workhub office Webflow Webflow Design</h3>
              <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
              <Link to="#">View project →</Link>
            </div>
          </div>
          <div className={styles.projectGroup}>
            <div className={`${styles.project} ${styles.projectSmall}`}>
              <img src={projectSmall1} alt="Project 2" />
              <div className={`${styles.overlay} ${styles.overlaySmall}`}>
                <h3>Unisas Website Design</h3>
                <Link to="#">View portfolio →</Link>
              </div>
            </div>
            <div className={`${styles.project} ${styles.projectSmall}`}>
              <img src={projectSmall2} alt="Project 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
