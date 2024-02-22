import React from 'react';
import generaleLogo from '../../images/mygrants logo.png';
import './navbar.css';

const Logo = () => {
  return (
    <div className="logo-container">
        <img src={generaleLogo} alt="Generali Logo" style={{ width: '200px', height: 'auto' }} />    </div>
  );
};

export default Logo;
