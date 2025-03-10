import { useState } from 'react';
import '../styles/CategoryFilter.scss';

function CategoryFilter({ categories, onCategoryChange, className }) {
  const [activeCategory, setActiveCategory] = useState('View all');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className={`category-filter ${className}`}>
      {['View all', ...categories].map((category) => (
        <button
          key={category}
          className={`category-filter__button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
