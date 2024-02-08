// Navbar.jsx
import './navbar.css';


import React from 'react';
import NavbarLink from './NavbarLink';
import LoginButton from './LoginButton';
import FindIcon from './FindIcon';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo className="navbar-logo" />

      <NavbarLink to="/link1" className="navbar-link">Posizioni Aperte</NavbarLink>
      <NavbarLink to="/link2" className="navbar-link">Eventi</NavbarLink>
      <NavbarLink to="/link3" className="navbar-link">Sfide</NavbarLink>
      <NavbarLink to="/link4" className="navbar-link">Corsi</NavbarLink>
      <NavbarLink to="/link5" className="navbar-link">Insight</NavbarLink>
      <NavbarLink to="/link6" className="navbar-link">Premi</NavbarLink>
      <NavbarLink to="/link7" className="navbar-link">Categorie</NavbarLink>

      <LoginButton />

      <FindIcon />
    </div>
  );
};

export default Navbar;
