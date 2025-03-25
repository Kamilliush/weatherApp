import { useState, useEffect } from 'react';
import CityToggle from './components/CityToggle';
import CityWeather from './components/CityWeather';
import ForecastContainer from './components/tempForecast/ForecastContainer';
import AirConditionsContainer from './components/airConditions/AirConditionContainer';

import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const [isGliwice, setIsGliwice] = useState(true);
  const handleSelectGliwice = () => setIsGliwice(true);
  const handleSelectHamburg = () => setIsGliwice(false);

  useEffect(() => {
    fetch('/weather')
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weather) {
    return <div>Loading...</div>;
  }

  const cityName = isGliwice ? 'Gliwice' : 'Hamburg';
  const cityData = isGliwice ? weather.gliwice : weather.hamburg;

  const realFeel = Math.round(cityData.current.feelslike_c);
  const wind = Math.round(cityData.current.wind_kph);
  const uv = Math.round(cityData.current.uv);

  return (
    <div className="container">
      <div className="leftCol">
        <CityToggle isGliwice={isGliwice} onSelectGliwice={handleSelectGliwice} onSelectHamburg={handleSelectHamburg} />
        <CityWeather cityData={cityData} />
        <ForecastContainer city={cityName} />
        <AirConditionsContainer realFeel={realFeel} wind={wind} uv={uv} />
      </div>

      <div className="rightCol"></div>
    </div>
  );
}

export default App;
