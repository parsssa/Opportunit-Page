// Title.jsx
import React from 'react';
import './title.css';
import TitleLogo from '../../images/opened-jobs-new.27665c18ec30095b.png'; // Assicurati di impostare il percorso corretto


const Title = () => {
  return (
    <div className="title-container">
      <div className="title-text">
        <h1>Posizioni Aperte</h1>
        <p>Scopri le opportunità di lavoro e candidati.</p>
      </div>
      <img src={TitleLogo} alt="Title Logo" />
    </div>
  );
};

export default Title;
