import React from 'react';

function CityWeather({ cityName, cityData }) {
  return (
    <div>
      <h2>{cityName}</h2>
      <p>Temperature: {cityData.current.temp_c}°C</p>
      <p>Conditions: {cityData.current.condition.text}</p>
    </div>
  );
}

export default CityWeather;
