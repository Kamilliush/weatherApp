import { useState, useEffect } from 'react';
import CityToggle from './components/CityToggle';
import CityWeather from './components/CityWeather';

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

  return (
    <div className="container">
      <CityToggle isGliwice={isGliwice} onSelectGliwice={handleSelectGliwice} onSelectHamburg={handleSelectHamburg} />

      <CityWeather cityName={cityName} cityData={cityData} />
    </div>
  );
}

export default App;
