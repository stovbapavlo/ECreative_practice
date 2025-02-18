import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import palettes from '../data/pallete.json';
import styles from '../styles/PalettePage.module.css';

function formatColorName(name) {
  return name.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function PalettePage() {
  const { id } = useParams();
  const palette = palettes.find((p) => p.id === id);
  const [fullscreenColor, setFullscreenColor] = useState(null);
  const [copiedText, setCopiedText] = useState('');
  const [hexCode, setHexCode] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);

  if (!palette) {
    return <h2>Palette not found</h2>;
  }

  const playSound = () => {
    const audio = new Audio('/assets/src_notify.mp3');
    audio.play().catch((error) => console.error('Ошибка воспроизведения аудио:', error));
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    playSound();
    setFullscreenColor(color);
    const messages = ['RIGHT ONE!', 'COPIED!', 'WILL DO!', 'PASTE ME!', 'GOT IT!'];
    setCopiedText(messages[Math.floor(Math.random() * messages.length)]);
    setHexCode(color);
    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
      setFullscreenColor(null);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      {fullscreenColor && (
        <div
          className={styles.fullscreenOverlay}
          style={{ backgroundColor: fullscreenColor }}
          onClick={() => setFullscreenColor(null)}>
          {showAnimation && (
            <>
              <span className={styles.fullscreenText}>{copiedText}</span>
              <span className={styles.hexCode}>{hexCode}</span>
            </>
          )}
        </div>
      )}

      <div className={styles.navbar}>
        <Link to="/" className={styles.backButton}>
          ← Back
        </Link>
        <div className={styles.copyFormat}>Copy Format: HEX</div>
        <div className={styles.soundToggle}>🔊 Sound On</div>
      </div>

      <div className={styles.colorGrid}>
        {palette.colors.map((color) => (
          <div
            key={color.name}
            className={styles.colorBox}
            style={{ backgroundColor: color.color }}
            onClick={() => copyToClipboard(color.color)}>
            <span className={styles.colorName}>{formatColorName(color.name)}</span>
            <span className={styles.copyText}>COPY</span> {/* Текст при наведении */}
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <span>{palette.paletteName}</span>
      </div>
    </div>
  );
}

export default PalettePage;
