const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;
const WEATHER_API_KEY = 'dd1b622140154b2a98d152731251703';

// Middleware
app.use(cors());
app.use(express.json());

// Get weather for Gliwice and Hamburg
app.get('/weather', async (req, res) => {
  try {
    const [gliwiceResponse, hamburgResponse] = await Promise.all([
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Gliwice`),
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Hamburg`),
    ]);

    res.json({
      gliwice: gliwiceResponse.data,
      hamburg: hamburgResponse.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error loading weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Serwer running on port: ${PORT}`);
});
