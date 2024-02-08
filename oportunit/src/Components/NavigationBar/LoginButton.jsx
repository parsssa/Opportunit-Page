// LoginButton.jsx

import React from 'react';
import IconProfile from '../../images/icon-profile.svg'; // Assicurati di impostare il percorso corretto

const LoginButton = () => {
  return (
    <div className="login-button">
      <img src={IconProfile} alt="Io Image" />
      <button>Accedi</button>
    </div>
  );
};

export default LoginButton;
