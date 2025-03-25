// src/components/CityToggle.jsx
import React from 'react';
import './CityToggle.css';

function CityToggle({ isGliwice, onSelectGliwice, onSelectHamburg }) {
  return (
    <div className="city-toggle-container">
      <button className={`city-toggle-button ${isGliwice ? 'active' : ''}`} onClick={onSelectGliwice}>
        Gliwice
      </button>
      <button className={`city-toggle-button ${!isGliwice ? 'active' : ''}`} onClick={onSelectHamburg}>
        Hamburg
      </button>
    </div>
  );
}

export default CityToggle;
