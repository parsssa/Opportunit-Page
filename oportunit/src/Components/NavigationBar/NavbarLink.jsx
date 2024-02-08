// NavbarLink.jsx

import React from 'react';

const NavbarLink = ({ to, children }) => {
  return (
    <a href={to} className="navbar-link">
      {children}
    </a>
  );
};

export default NavbarLink;
