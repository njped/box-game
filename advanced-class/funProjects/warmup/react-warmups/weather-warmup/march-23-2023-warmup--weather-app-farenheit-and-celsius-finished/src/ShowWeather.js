import { useState, useEffect } from "react";

export default function ShowWeather({ latitude, longitude }) {
  const [farenheitText, setFarenheitText] = useState(
    "Loading farenheit text..."
  );
  const [celsiusText, setCelsiusText] = useState("Loading Celsius Text...");

  async function fetchAndUpdateWeatherText() {
    const newFarenheitText = await getFarenheitText({ latitude, longitude });
    const newCelisusText = await getCelsiusText({ latitude, longitude });

    setFarenheitText(newFarenheitText);
    setCelsiusText(newCelisusText);
  }

  useEffect(() => {
    fetchAndUpdateWeatherText();
  }, [latitude, longitude]);

  return (
    <div id="weather">
      <label>Today's Weather in Farenheit</label>
      <p>{farenheitText}</p>

      <label>Today's Weather in Celsius</label>
      <p>{celsiusText}</p>
    </div>
  );
}

async function getFarenheitText({ latitude, longitude }) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit`;
  const response = await fetch(url);
  const data = await response.json();
  const temperatureInFarenheit = data.hourly["temperature_2m"][0];

  return `${temperatureInFarenheit} degrees farenheit`;
}

async function getCelsiusText({ latitude, longitude }) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;
  const response = await fetch(url);
  const data = await response.json();
  const temperatureInFarenheit = data.hourly["temperature_2m"][0];

  return `${temperatureInFarenheit} degrees celsius`;
}
