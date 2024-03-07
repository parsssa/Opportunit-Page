import React, { useState, useEffect } from 'react';
import './search.css';

const Filter = ({ label, options, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionStatus, setOptionStatus] = useState({});

  useEffect(() => {
    // Inizializza lo stato delle opzioni, tutte impostate su true
    const initialStatus = options.reduce((acc, option) => {
      acc[option.value] = true;
      return acc;
    }, {});
    setOptionStatus(initialStatus);

    // Chiamata iniziale per inviare tutte le opzioni selezionate
    onFilterChange(Object.keys(initialStatus));

  }, [options, onFilterChange]);

  const handleCheckboxChange = (value) => {
    // Inverti lo stato dell'opzione cliccata
    setOptionStatus(prevStatus => ({
      ...prevStatus,
      [value]: !prevStatus[value],
    }));

    // Aggiorna le opzioni selezionate da inviare
    const selectedOptions = Object.keys(optionStatus).filter(option => optionStatus[option]);
    onFilterChange(selectedOptions);

    // Mantieni aperta la dropdown dopo l'interazione
    setIsOpen(true);
  };

  const handleButtonClick = () => {
    // Inverti lo stato di isOpen quando il pulsante viene cliccato
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter">
      <button className="filter-button" onClick={handleButtonClick}>
        {label}: {Object.values(optionStatus).every(status => status) ? 'Tutte' : ''}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="checkbox"
                value={option.value}
                checked={optionStatus[option.value]}
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
