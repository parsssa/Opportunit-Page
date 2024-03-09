// PosizioniVisualizzazione.jsx
import React from 'react';
import Posizione from './Posizione';
import { Link } from 'react-router-dom'; // Import Link for navigation
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
      {positions.length > 3 && (
        <Link to={`/viewAllPositions/${title.toLowerCase()}`} className="vedi-tutte-button">
          Vedi tutte ({positions.length})
        </Link>
      )}
    </div>
  );
};

export default PosizioniVisualizzazione;
