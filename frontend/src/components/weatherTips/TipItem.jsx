import React from 'react';

export default function TipItem({ tip }) {
  return (
    <div className="tipItemContainer">
      <p className="tipItemText">{tip}</p>
    </div>
  );
}
