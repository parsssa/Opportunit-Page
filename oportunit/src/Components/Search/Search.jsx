import React, { useState } from 'react';
import SearchBox from './SearchBox';
import Filter from './Filter';
import Autocandidatura from './Autocandidatura';
import './search.css';

const Search = () => {
  const filters = [
    { label: 'Categorie', options: [{ value: 'Tutte', label: 'Tutte' }, { value: 'Opzione 1', label: 'Opzione 1' }, { value: 'Opzione 2', label: 'Opzione 2' }] },
    { label: 'Localita', options: [{ value: 'Tutte', label: 'Tutte' }, { value: 'Opzione 3', label: 'Opzione 3' }, { value: 'Opzione 4', label: 'Opzione 4' }] },
  ];

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleFilterChange = (filterLabel, selectedOption) => {
    setSelectedOptions(prevOptions => ({ ...prevOptions, [filterLabel]: selectedOption }));
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <SearchBox />
      </div>


      <div className="filters-container">
        {filters.map((filter, index) => (
          <Filter
            key={index}
            label={filter.label}
            options={filter.options}
            selectedOption={selectedOptions[filter.label]}
            onFilterChange={(selectedOption) => handleFilterChange(filter.label, selectedOption)}
          />
        ))}
      </div>
    </div>

  );
};

export default Search;
