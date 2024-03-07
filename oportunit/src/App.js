import React, { useEffect } from 'react';
import './App.css'; // Import any other styles you may have
import Navbar from './Components/NavigationBar/Navbar';
import Title from './Components/Title/Title';
//import PosizioniInEvidenza from './Components/PosizioniInEvidenza/PosizioniInEvidenza';  //IMPORT DEPRECATO
import Footer from './Components/Footer/Footer';
import Search from './Components/Search/Search';
// Import per React Router, componente che permette di gestire siti multi-pagina 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PosizioniVisualizzazione from './Components/PosizioniVisualizzazione/PosizioniVisualizzazione';



function App() {
  useEffect(() => {
    document.title = 'Generali Jobs';
  }, []);

  const posizioniInEvidenza = [
    { title: 'Posizione 1', location: 'Location 1' },
    { title: 'Posizione 2', location: 'Location 2' },
    { title: 'Posizione 3', location: 'Location 3' },
    // Aggiungi altre posizioni secondo necessità
  ];

  const altrePosizioni = [
    // ... Altre posizioni per un'altra categoria
  ];

  const ancoraAltrePosizioni = [
    // ... Altre posizioni per un'altra categoria
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body className='App-body'>
        <Title />
        <Search />
        <hr className="hr-light" />
        <PosizioniVisualizzazione title="Posizioni in Evidenza" positions={posizioniInEvidenza} />
        <hr className="hr-light" />
        <PosizioniVisualizzazione title="Posizioni in Audit" positions={altrePosizioni} />
        <hr className="hr-light" />
        <PosizioniVisualizzazione title="Posizioni in Claims" positions={ancoraAltrePosizioni} />
      </body>
      <Footer />
    </div>
  );
}

export default App;
