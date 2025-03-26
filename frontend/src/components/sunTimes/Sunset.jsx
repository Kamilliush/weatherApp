import React from 'react';
import './SunTimes.css';

const Sunset = ({ sunset }) => {
  return (
    <div className="sunTimeItem">
      <h3 className="sunTimesTitle">Sunset</h3>
      <p className="sunTimeItemText">{sunset}</p>
    </div>
  );
};

export default Sunset;
