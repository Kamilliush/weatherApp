import React, { useState, useEffect } from 'react';
import HoursContainer from './HoursContainer';

export default function ForecastContainer({ city }) {
  const [hours, setHours] = useState([]);

  const WEATHER_API_KEY = 'dd1b622140154b2a98d152731251703';

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=2&aqi=no&alerts=no`)
      .then((res) => res.json())
      .then((data) => {
        const allHours = data.forecast.forecastday.flatMap((day) => day.hour);
        const now = new Date();
        const nextHours = allHours.filter((h) => new Date(h.time.replace(' ', 'T')) >= now).slice(0, 8);
        setHours(nextHours);
      })
      .catch((err) => console.error(err));
  }, [city]);

  return (
    <div className="forecastContainer">
      <p className="forecastTitle">Today's forecast</p>
      <HoursContainer hours={hours} />
    </div>
  );
}
