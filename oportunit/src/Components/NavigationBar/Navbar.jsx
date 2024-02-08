import React from 'react';
import Logo from './Logo';
import FindIcon from './FindIcon';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo />
      <FindIcon />
      {/* Altri componenti della barra di navigazione, se presenti */}
    </div>
  );
};

export default Navbar;
