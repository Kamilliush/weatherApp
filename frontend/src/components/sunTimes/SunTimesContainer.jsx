// src/components/sunTimes/SunTimesContainer.jsx
import React, { useState, useEffect } from 'react';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import './SunTimes.css';

const SunTimesContainer = ({ cityData }) => {
  const [astroData, setAstroData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 'dd1b622140154b2a98d152731251703';

  // Pobieramy nazwę miasta z przekazanych danych (np. "Gliwice" lub "Hamburg")
  const cityName = cityData?.location?.name;

  useEffect(() => {
    const fetchAstroData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=1`);
        if (!response.ok) {
          throw new Error('Błąd połączenia z WeatherAPI');
        }
        const data = await response.json();
        // Dane astronomiczne znajdują się w forecast.forecastday[0].astro
        const astro = data.forecast?.forecastday?.[0]?.astro;
        setAstroData(astro);
      } catch (err) {
        setError(err.message);
      }
    };

    if (cityName) {
      fetchAstroData();
    }
  }, [cityName]);

  if (error) {
    return <div className="sunTimesContainer">Błąd: {error}</div>;
  }
  if (!astroData) {
    return <div className="sunTimesContainer">Ładowanie danych o wschodzie i zachodzie słońca...</div>;
  }

  return (
    <div className="sunTimesContainer">
      <Sunrise sunrise={astroData.sunrise} />
      <Sunset sunset={astroData.sunset} />
    </div>
  );
};

export default SunTimesContainer;
