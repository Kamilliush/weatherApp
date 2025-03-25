import React from 'react';
import { getWeatherTips } from './tipsDatabase';
import TipItem from './TipItem';
import './weatherTips.css';

export default function WeatherTipsContainer({ cityData }) {
  const temperature = Math.round(cityData.current.temp_c);
  const conditionText = cityData.current.condition.text.toLowerCase();

  const tips = getWeatherTips(temperature, conditionText);

  return (
    <div className="weatherTipsContainer">
      <h2 className="weatherTipsTitle">Today's Tip</h2>
      {tips.length === 0 ? (
        <p>No specific tips for now.</p>
      ) : (
        tips.map((tip, index) => <TipItem key={index} tip={tip} />)
      )}
    </div>
  );
}
