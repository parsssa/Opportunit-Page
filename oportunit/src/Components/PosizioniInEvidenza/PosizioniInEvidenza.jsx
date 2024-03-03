// PosizioniInEvidenza.jsx

import React from 'react';
import Posizione from './Posizione';
import './posizioniInEvidenza.css';


const PosizioniInEvidenza = () => {
  const positions = [
    { title: 'Posizione 1', Location: 'Descrizione 1' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' },
    { title: 'Posizione 2', Location: 'Descrizione 2' }
    // Aggiungi altre posizioni secondo necessità
  ];

  // un sottoarray di positions che passeremo a map
  const firstThreePositions = positions.slice(0, 3);

  return (
    <div className="posizioni-in-evidenza-container">
      <h2>Posizioni in Evidenza</h2>
      <div className="posizioni-container">
        {firstThreePositions.map((position, index) => (
          <Posizione key={index} {...position} />
        ))}
      </div>
    </div>
  );
};

export default PosizioniInEvidenza;
