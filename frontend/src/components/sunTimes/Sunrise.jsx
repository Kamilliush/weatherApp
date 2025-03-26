import React from 'react';
import './SunTimes.css';

const Sunrise = ({ sunrise }) => {
  return (
    <div className="sunTimeItem">
      <h3 className="sunTimesTitle">Sunrise</h3>
      <p className="sunTimeItemText">{sunrise}</p>
    </div>
  );
};

export default Sunrise;
