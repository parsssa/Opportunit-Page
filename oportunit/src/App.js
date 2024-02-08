import React from 'react';
import Navbar from './Components/NavigationBar/Navbar';  // Assicurati di impostare il percorso corretto
import PosizioniInEvidenza from './Components/PosizioniInEvidenza/PosizioniInEvidenza';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <PosizioniInEvidenza/>
      </body>
    </div>
  );
}

export default App;
