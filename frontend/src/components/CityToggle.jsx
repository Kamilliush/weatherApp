import React from 'react';
import './CityToggle.css';

function CityToggle({ isGliwice, onSelectGliwice, onSelectHamburg }) {
  return (
    <div className="cityToggleContainer">
      <button className={`cityToggleButton ${isGliwice ? 'active' : ''}`} onClick={onSelectGliwice}>
        Gliwice
      </button>
      <button className={`cityToggleButton ${!isGliwice ? 'active' : ''}`} onClick={onSelectHamburg}>
        Hamburg
      </button>
    </div>
  );
}

export default CityToggle;
