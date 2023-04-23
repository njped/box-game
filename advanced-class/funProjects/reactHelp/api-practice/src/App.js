import { useEffect, useState } from 'react';
import './App.css';

function App() {
  async function intializeStateAfterFetch() {
    const data = await fetchData();
    const newTemp = data.hourly?.temperature_2m[0];

    setTemp(newTemp);
  }

  const [temp, setTemp] = useState()
  const [lastTimeUpdated, setLastTimeUpdate] = useState()


  useEffect(() => {
    const minute = 1000 * 60
    setInterval(() => {
      const newLastTimeUpdated = new Date;
  
      setLastTimeUpdate(newLastTimeUpdated);
    }, minute)
  }, [])

  useEffect(() => {
    intializeStateAfterFetch()
  }, [lastTimeUpdated])
  
  return (
    <div>
      <h1>The Weather Right Now</h1>
      <h3>Last time app checked for weather: {lastTimeUpdated.toLocalString()}</h3>
      <h3>Current Temperature in Celsius: {temp}</h3>
    </div>
  );
}

async function fetchData() {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=40.39&longitude=-111.85&hourly=temperature_2m&temperature_unit=fahrenheit';
  const response = await fetch(url);
  return response.json()
}

export default App;
