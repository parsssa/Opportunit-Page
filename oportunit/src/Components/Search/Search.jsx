// Search.jsx
import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import Filter from './Filter';
import CityFilter from '../../dati_applicazione/CityFilter'; // Update the import path
import './search.css';

const Search = () => {
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    // Fetch filtered cities using CityFilter
    const cityFilter = new CityFilter(100000);
    setFilteredCities(cityFilter.filterCitiesByPopulation());
  }, []);

  const filters = [
    { label: 'Categorie', options: [{ value: 'Tutte', label: 'Tutte' }, { value: 'Opzione 1', label: 'Opzione 1' }, { value: 'Opzione 2', label: 'Opzione 2' }] },
    { label: 'Località', options: [{ value: 'Tutte', label: 'Tutte' }, ...filteredCities.map(city => ({ value: city.nome, label: city.nome }))] },
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
