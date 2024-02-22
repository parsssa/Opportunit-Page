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
    if (value === 'Tutte') {
      // If "Tutte" is checked, select all options
      const updatedOptions = selectedOption && selectedOption.length > 0 && selectedOption.includes('Tutte')
        ? [] // Uncheck "Tutte" if it was already checked
        : options.map(option => option.value);
      onFilterChange(updatedOptions);
    } else {
      // Toggle the option
      const updatedOptions = selectedOption ? [...selectedOption] : [];
      const index = updatedOptions.indexOf(value);

      if (index === -1) {
        updatedOptions.push(value);
      } else {
        updatedOptions.splice(index, 1);
      }

      // If "Tutte" is unchecked and any individual option is unchecked, remove it from the selection
      if (!updatedOptions.includes('Tutte') && updatedOptions.length > 0) {
        const indexOfTutte = updatedOptions.indexOf('Tutte');
        if (indexOfTutte !== -1) {
          updatedOptions.splice(indexOfTutte, 1);
        }
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
