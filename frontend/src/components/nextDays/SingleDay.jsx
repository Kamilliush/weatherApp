const SingleDay = ({ dayData }) => {
  const { date, day } = dayData;
  const { mintemp_c, maxtemp_c, condition } = day;

  const weekday = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <div className="singleDay">
      <p className="date">{weekday}</p>
      <img src={condition.icon} alt={condition.text} />
      <p className="temp">
        <span className="max">{Math.round(maxtemp_c)}°C</span> / <br />{' '}
        <span className="min">{Math.round(mintemp_c)}°C</span>
      </p>
    </div>
  );
};

export default SingleDay;
