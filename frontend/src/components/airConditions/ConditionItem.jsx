import React from 'react';

export default function ConditionItem({ label, value, icon }) {
  return (
    <div className="conditionItem">
      {icon && (
        <div className="conditionIcon">
          <img src={icon} alt={label} />
        </div>
      )}
      <div className="conditionInfo">
        <div className="conditionLabel">{label}</div>
        <div className="conditionValue">{value}</div>
      </div>
    </div>
  );
}
