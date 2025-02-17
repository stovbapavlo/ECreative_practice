import React, { memo, useEffect, useRef, useState } from 'react';
import styles from '../styles/PaletteCard.module.css';

const EmojiAnimation = memo(({ palette, isHovered }) => {
  const [currentEmoji, setCurrentEmoji] = useState(palette.emoji);
  const [emojiIndex, setEmojiIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    isHovered ? startEmojiAnimation() : stopEmojiAnimation();

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const startEmojiAnimation = () => {
    if (!palette.emojis || palette.emojis.length === 0) return;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setEmojiIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % palette.emojis.length;
        setCurrentEmoji(palette.emojis[newIndex]);
        return newIndex;
      });
    }, 500);
  };

  const stopEmojiAnimation = () => {
    clearInterval(intervalRef.current);
    setCurrentEmoji(palette.emoji);
    setEmojiIndex(0);
  };

  return <span className={styles.emoji}>{currentEmoji}</span>;
});

export default EmojiAnimation;
