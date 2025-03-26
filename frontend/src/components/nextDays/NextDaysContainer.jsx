import { useState, useEffect } from 'react';
import NextDaysGrid from './NextDaysGrid';
import './NextDays.css';

const API_KEY = 'dd1b622140154b2a98d152731251703';

const NextDaysContainer = ({ city }) => {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=8&aqi=no&alerts=no`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Błąd HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.forecast && data.forecast.forecastday) {
          setForecast(data.forecast.forecastday);
        } else {
          throw new Error('Niewłaściwa struktura danych z API.');
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, [city]);

  if (error) return <div>Error: {error}</div>;
  if (!forecast) return <div>Loading forecast...</div>;

  return (
    <div className="nextDaysContainer">
      <p className="nextDaysTitle">Next days forecast</p>

      <NextDaysGrid forecastDays={forecast} />
    </div>
  );
};

export default NextDaysContainer;
