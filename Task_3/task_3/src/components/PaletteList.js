import React from 'react';
import palettes from '../data/pallete.json';
import styles from '../styles/PaletteList.module.css';
import PaletteCard from './PaletteCard';

const PaletteList = () => {
  return (
    <div className={styles.container}>
      {palettes.slice(0, 9).map((palette) => (
        <PaletteCard key={palette.id} palette={palette} />
      ))}
    </div>
  );
};

export default PaletteList;
