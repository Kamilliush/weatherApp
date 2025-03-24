import { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <div style={{ padding: '20px' }}>
      <h1>Weather App</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Gliwice</h2>
        <p>Temperature: {weather.gliwice.current.temp_c}°C</p>
        <p>Conditions: {weather.gliwice.current.condition.text}</p>
      </div>
      <div>
        <h2>Hamburg</h2>
        <p>Temperature: {weather.hamburg.current.temp_c}°C</p>
        <p>Conditions: {weather.hamburg.current.condition.text}</p>
      </div>
    </div>
  );
}

export default App;
