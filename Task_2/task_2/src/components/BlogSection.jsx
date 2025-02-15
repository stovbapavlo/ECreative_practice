import React from 'react';
import styles from '../styles/BlogSection.module.css';
import blog1 from '../assets/images/blog1.png';
import blog2 from '../assets/images/blog2.png';
import blog3 from '../assets/images/blog3.png';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      date: '19 Jan 2022',
      title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      description:
        "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
      link: '#',
    },
    {
      id: 2,
      image: blog2,
      date: '19 Jan 2022',
      title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      description:
        "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
      link: '#',
    },
    {
      id: 3,
      image: blog3,
      date: '19 Jan 2022',
      title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
      description:
        "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
      link: '#',
    },
  ];

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <h2 className={styles.blogTitle}>Our blog</h2>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.blogCard}>
              <img src={post.image} alt={post.title} className={styles.blogImage} />
              <p className={styles.blogDate}>{post.date}</p>
              <h3 className={styles.blogHeading}>{post.title}</h3>
              <p className={styles.blogDescription}>{post.description}</p>
              <a href={post.link} className={styles.blogLink}>
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
