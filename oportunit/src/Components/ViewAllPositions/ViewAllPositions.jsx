// ViewAllPositions.jsx
import React from 'react';
import Posizione from './Posizione';
import { useParams } from 'react-router-dom';
import './viewAllPositions.css';

const ViewAllPositions = () => {
  // Access the category parameter from the URL
  const { category } = useParams();

  // Logic to fetch and display positions based on the category
  // Replace this with your actual logic for fetching positions
  const positions = [
    { title: 'Posizione 1', location: 'Location 1' },
    { title: 'Posizione 2', location: 'Location 2' },
    { title: 'Posizione 3', location: 'Location 3' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    { title: 'Posizione 4', location: 'Location 4' },
    // Add more positions as needed
  ];

  return (
    <div className="view-all-positions-container">
      <h2>All Positions in {category}</h2>
      <div className="posizioni-container">
        {positions.map((position, index) => (
          <Posizione key={index} {...position} />
        ))}
      </div>
    </div>
  );
};

export default ViewAllPositions;
