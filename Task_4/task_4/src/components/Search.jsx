import { useState } from 'react';
import '../styles/search.scss';
import searchIcon from '../assets/icons/Search.png';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input
          type="text"
          className="search__input"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
