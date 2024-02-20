// Search.jsx
import React from 'react';
import SearchBox from './SearchBox';
import Filter from './Filter';
import Autocandidatura from './Autocandidatura';
import './search.css';

const Search = () => {
  const filters = [
    { label: 'Categorie', options: [{ value: 'all', label: 'Tutte' }, { value: 'option1', label: 'Opzione 1' }, { value: 'option2', label: 'Opzione 2' }] },
    { label: 'Localita', options: [{ value: 'all', label: 'Tutte' }, { value: 'option3', label: 'Opzione 3' }, { value: 'option4', label: 'Opzione 4' }] },
    { label: 'Seniority', options: [{ value: 'all', label: 'Tutte' }, { value: 'option5', label: 'Opzione 5' }, { value: 'option6', label: 'Opzione 6' }] },
  ];

  return (
    <div className="search-container">
      <div className="search-box">
        <SearchBox />
      </div>
      
      <div className='search-buttons'>
      <div className="filters-container">
        {filters.map((filter, index) => (
          <Filter key={index} label={filter.label} options={filter.options} />
        ))}
      </div>

      <div className="autocandidatura">
        <Autocandidatura />
      </div>
      </div>
    </div>
  );
};

export default Search;
