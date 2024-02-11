import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/NavigationBar/Navbar';
import Title from './Components/Title/Title'
import PosizioniInEvidenza from './Components/PosizioniInEvidenza/PosizioniInEvidenza';
import Footer from './Components/Footer/Footer';
import Search from './Components/Search/Search';

function App() {
  useEffect(() => {
    document.title = 'Generali Jobs';
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
        <Title/>
        <Search/>
        <PosizioniInEvidenza/>
        <Footer/>
      </body>
    </div>
  );
}

export default App;
