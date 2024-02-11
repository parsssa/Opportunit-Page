// PosizioniInEvidenza.jsx

import React from 'react';
import Posizione from './Posizione';
import './posizioniInEvidenza.css';


const PosizioniInEvidenza = () => {
  const positions = [
    { title: 'Posizione 1', description: 'Descrizione 1' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' },
    { title: 'Posizione 2', description: 'Descrizione 2' }
    // Aggiungi altre posizioni secondo necessità
  ];

  return (
    <div className="posizioni-in-evidenza-container">
      <h2>Posizioni in Evidenza</h2>
      <div className="posizioni-container">
        {positions.map((position, index) => (
          <Posizione key={index} {...position} />
        ))}
      </div>
    </div>
  );
};

export default PosizioniInEvidenza;
