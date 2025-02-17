import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmojiAnimation from './EmojiAnimation';
import styles from '../styles/PaletteCard.module.css';

const PaletteCard = ({ palette }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={`/palette/${palette.id}`}
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className={styles.paletteContainer}>
        <div className={styles.colorsWrapper}>
          {palette.colors.slice(0, 20).map((color) => (
            <div
              key={color.name}
              className={styles.colorBox}
              style={{ backgroundColor: color.color }}></div>
          ))}
        </div>
        <div className={styles.title}>
          <span className={styles.paletteName}>{palette.paletteName}</span>
          <EmojiAnimation palette={palette} isHovered={isHovered} />
        </div>
      </div>
    </Link>
  );
};

export default PaletteCard;
