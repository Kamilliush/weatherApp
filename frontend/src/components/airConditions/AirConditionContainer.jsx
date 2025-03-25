import React from 'react';
import ConditionItem from './ConditionItem';
import './airConditions.css';

export default function AirConditionsContainer({ realFeel, wind, uv }) {
  return (
    <div className="airConditionsContainer">
      <div className="airConditionsHeader">
        <p className="airConditionsTitle">Air conditions</p>
      </div>

      <div className="airConditionsGrid">
        <ConditionItem
          label="Perceived"
          value={`${Math.round(realFeel)}°C`}
          icon="https://cdn-icons-png.flaticon.com/512/3313/3313902.png"
        />
        <ConditionItem
          label="Wind"
          value={`${wind} km/h`}
          icon="https://cdn-icons-png.flaticon.com/512/824/824695.png"
        />
        <ConditionItem label="UV Index" value={`${uv}`} icon="https://cdn-icons-png.flaticon.com/512/606/606795.png" />
      </div>
    </div>
  );
}
