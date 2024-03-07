// PosizioniVisualizzazione.jsx

import React from 'react';
import Posizione from './Posizione';
import './posizioniVisualizzazione.css';

const PosizioniVisualizzazione = ({ title, positions }) => {
  const firstThreePositions = positions.slice(0, 3);

  return (
    <div className="posizioni-visualizzazione-container">
      <h2>{title}</h2>
      <div className="posizioni-container">
        {firstThreePositions.map((position, index) => (
          <Posizione key={index} {...position} />
        ))}
      </div>
    </div>
  );
};

export default PosizioniVisualizzazione;
