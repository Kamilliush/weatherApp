import React from 'react';

export default function Hour({ hourData }) {
  const { time, temp_c, condition } = hourData;

  // format is "YYYY-MM-DD HH:mm" so i split the second part to get only hour
  const timeOnly = time.split(' ')[1] || time;

  return (
    <div className="hourCard">
      <div className="hourTime">{timeOnly}</div>
      <img src={condition.icon} alt={condition.text} className="hourIcon" />
      <div className="hourTemp">{temp_c}°C</div>
    </div>
  );
}
