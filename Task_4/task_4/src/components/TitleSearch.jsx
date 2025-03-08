import { useState } from 'react';
import '../styles/titleSearch.scss';
import searchIcon from '..//assets/icons/Search.png';

function TitleSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="title-search">
      <p className="title-search__label">Our blog</p>
      <h2 className="title-search__heading">The latest writings from our team</h2>
      <p className="title-search__subtitle">
        The latest industry news, interviews, technologies, and resources.
      </p>
      <div className="title-search__input-wrapper">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input
          type="text"
          className="title-search__input"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default TitleSearch;
