// Home.jsx
import React from 'react';
import Title from '../Title/Title';
import Search from '../Search/Search';
import PosizioniVisualizzazione from '../PosizioniVisualizzazione/PosizioniVisualizzazione';

const Home = () => {
  const posizioniInEvidenza = [
    { title: 'Posizione 1', location: 'Location 1' },
    { title: 'Posizione 2', location: 'Location 2' },
    { title: 'Posizione 3', location: 'Location 3' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
  ];

  const altrePosizioni = [
    { title: 'Posizione 1', location: 'Location 1' },
    { title: 'Posizione 2', location: 'Location 2' },
  ];

  const ancoraAltrePosizioni = [
    // ... Altre posizioni per un'altra categoria
  ];

  return (
    <div className="App-body">
      <Title />
      <Search />
      <hr className="hr-light" />
      <PosizioniVisualizzazione title="Posizioni in Evidenza" positions={posizioniInEvidenza} />
      <hr className="hr-light" />
      <PosizioniVisualizzazione title="Posizioni in Audit" positions={altrePosizioni} />
      <hr className="hr-light" />
      <PosizioniVisualizzazione title="Posizioni in Claims" positions={ancoraAltrePosizioni} />
    </div>
  );
}

export default Home;
