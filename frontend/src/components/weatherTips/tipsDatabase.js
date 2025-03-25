export function getWeatherTips(temp, conditionText) {
  const tips = [];

  if (temp < 5) {
    tips.push("It's quite cold outside – wear a warm jacket and maybe a scarf.");
  } else if (temp < 15) {
    tips.push("It's a bit chilly – a light jacket should do.");
  } else if (temp > 30) {
    tips.push("It's really hot! Stay hydrated and wear light clothing.");
  }

  if (conditionText.includes('rain')) {
    tips.push("It's raining – don't forget an umbrella or raincoat.");
  }

  if (conditionText.includes('cloudy') && !conditionText.includes('rain')) {
    tips.push('It might get rainy later – keep an umbrella handy, just in case.');
  }

  return tips;
}
