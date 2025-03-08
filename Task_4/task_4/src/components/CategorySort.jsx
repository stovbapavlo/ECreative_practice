import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import '../styles/CategorySort.scss';

function CategorySort({ categories, onCategoryChange, onSortChange }) {
  const [activeCategory, setActiveCategory] = useState('View all');
  const [sortOrder, setSortOrder] = useState('Most recent');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  const handleSortSelect = (value) => {
    setSortOrder(value);
    onSortChange(value);
    setIsSortOpen(false);
  };

  return (
    <div className="category-sort">
      <div className="category-sort__categories">
        {['View all', ...categories].map((category) => (
          <button
            key={category}
            className={`category-sort__button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>

      <div className="category-sort__sort">
        <button className="category-sort__sort-btn" onClick={() => setIsSortOpen(!isSortOpen)}>
          {sortOrder} <FiChevronDown className="category-sort__icon" />
        </button>
        {isSortOpen && (
          <ul className="category-sort__dropdown">
            <li onClick={() => handleSortSelect('Most recent')}>Most recent</li>
            <li onClick={() => handleSortSelect('Alphabetical')}>Alphabetical</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default CategorySort;
