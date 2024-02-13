// LoginButton.jsx

import React from 'react';
import NavbarLink from './NavbarLink';
import IconProfile from '../../images/icon-profile.svg'; // Assicurati di impostare il percorso corretto

const LoginButton = () => {
  return (
    <div className="login-button">
      <img src={IconProfile} alt="Io Image" />
      <button><NavbarLink to="/link2" className="navbar-link">Accedi</NavbarLink></button>
    </div>
  );
};

export default LoginButton;
