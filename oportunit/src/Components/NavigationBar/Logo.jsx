import React from 'react';
import generaleLogo from '../../images/logo-generali-red-header.png';
import './navbar.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={generaleLogo} alt="Generali Logo" />
    </div>
  );
};

export default Logo;
