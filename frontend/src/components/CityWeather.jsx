import React from 'react';
import './CityWeather.css';

function CityWeather({ cityData }) {
  return (
    <div>
      <p className="titleTemp">{Math.round(cityData.current.temp_c)}°C</p>
    </div>
  );
}

export default CityWeather;
