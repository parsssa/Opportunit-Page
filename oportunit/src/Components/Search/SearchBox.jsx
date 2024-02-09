// SearchBox.jsx
import React from 'react';
import './search.css';

const SearchBox = () => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Cerca..." />
      <button type="button">Cerca</button>
    </div>
  );
};

export default SearchBox;