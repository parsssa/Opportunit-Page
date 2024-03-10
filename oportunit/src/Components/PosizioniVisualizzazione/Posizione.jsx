// Posizione.jsx
import locationPicture from '../../images/location.svg';
import React from 'react';

const Posizione = ({ title, location }) => {
  return (
    <div className="posizione">
      <h3>{title}</h3>
      <div className='location-container'>
      <img src={locationPicture} alt="Generali Logo" style={{ width: '17px', height: '17px' }} />   
      <p className='location-text'>{location}</p>
      </div>
    </div>
  );
};

export default Posizione;
