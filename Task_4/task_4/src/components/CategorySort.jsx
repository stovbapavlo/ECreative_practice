import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import '../styles/CategorySort.scss';

function CategorySort({ onSortChange }) {
  const [sortOrder, setSortOrder] = useState('Most recent');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleSortSelect = (value) => {
    setSortOrder(value);
    onSortChange(value);
    setIsSortOpen(false);
  };

  return (
    <div className="category-sort">
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
  );
}

export default CategorySort;
