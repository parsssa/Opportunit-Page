// Filter.jsx
import React, { useState, useEffect } from 'react';
import './search.css';

const Filter = ({ label, options, selectedOption = [], onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Ensure "Tutte" is selected by default only on initial load
    if (selectedOption.length === 0) {
      const defaultOptions = options.map(option => option.value);
      onFilterChange(defaultOptions);
    }
  }, [options, selectedOption, onFilterChange]);

  const handleCheckboxChange = (value) => {
    const updatedOptions = selectedOption ? [...selectedOption] : [];
  
    if (value === 'Tutte') {
      // If "Tutte" is checked, select all options
      const allOptionsChecked = updatedOptions.length === options.length;
  
      if (allOptionsChecked) {
        // Uncheck all options if everything is checked
        onFilterChange([]);
      } else {
        // Check all options
        const allOptions = options.map(option => option.value);
        onFilterChange(allOptions);
      }
    } else {
      const index = updatedOptions.indexOf(value);
  
      if (index === -1) {
        updatedOptions.push(value);
      } else {
        updatedOptions.splice(index, 1);
      }
  
      // If "Tutte" is unchecked, uncheck all other options
      const tutteIndex = updatedOptions.indexOf('Tutte');
      if (tutteIndex !== -1) {
        updatedOptions.splice(tutteIndex, 1);
      }
  
      onFilterChange(updatedOptions);
    }
  };
  
  
  return (
    <div className="filter">
      <button className="filter-button" onClick={() => setIsOpen(!isOpen)}>
        {label}: {selectedOption.includes('Tutte') ? 'Tutte' : ''}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOption && selectedOption.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
