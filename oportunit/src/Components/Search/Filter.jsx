// Filter.jsx
import React from 'react';
import './search.css';

const Filter = ({ label, options }) => {
  return (
    <div className="filter">
      <button className="filter-button">
        {label} <span className="caret">&#9660;</span>
      </button>
      <div className="dropdown-content">
        {options.map((option, index) => (
          <div key={index} value={option.value} className="option">
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
