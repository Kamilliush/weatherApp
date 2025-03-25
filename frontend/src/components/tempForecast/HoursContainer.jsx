import React from 'react';
import Hour from './Hour';
import './Forecast.css';

export default function HoursContainer({ hours }) {
  return (
    <div className="hoursContainer">
      {hours.map((hourData, index) => (
        <Hour key={index} hourData={hourData} />
      ))}
    </div>
  );
}
