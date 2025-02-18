import React from 'react';
import Header from '../components/Header';
import PaletteList from '../components/PaletteList';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <PaletteList />
    </div>
  );
};

export default Home;
