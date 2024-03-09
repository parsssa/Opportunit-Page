// App.js
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/NavigationBar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home'; // Import the Home component
import ViewAllPositions from './Components/ViewAllPositions/ViewAllPositions';
import { Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = 'Generali Jobs';
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      {/* Use the Routes component for defining routes */}
      <Routes>
        {/* Use the Route component to define individual routes */}
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
        <Route path="/ViewAllPositions/:categoria" element={<ViewAllPositions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
