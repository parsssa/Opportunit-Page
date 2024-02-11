// Footer.jsx

import React from 'react';
import './footer.css'; // Import the corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="top-rectangle">
        <div className="content">
          <div className="logo">Your Logo</div>
          <div className="social-icons">Social Icons</div>
        </div>
        <div className="footer-links">Footer Links</div>
      </div>
      <div className="bottom-rectangle">
        <div className="links">Privacy Policy, Terms and Conditions, ...</div>
        <div className="company-info">Company Information</div>
      </div>
    </footer>
  );
};

export default Footer;
