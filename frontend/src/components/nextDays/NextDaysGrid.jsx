import SingleDay from './SingleDay';

const NextDaysGrid = ({ forecastDays }) => {
  return (
    <div className="nextDaysGrid">
      {forecastDays.map((day, index) => (
        <SingleDay key={index} dayData={day} />
      ))}
    </div>
  );
};

export default NextDaysGrid;
