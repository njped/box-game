import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function MyDate() {
  let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
  return (
    <h3>{date}</h3>
  )
}

function ShowTemp() {
  const [tempText, setTempText] = useState('Loading weather text...')

  async function updateTempText() {
    const newTempText = await myTemp()

    setTempText(newTempText);
  }

  updateTempText();
  return (
    {tempText}
  )
}

async function myTemp() {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=40.39&longitude=-111.85&hourly=temperature_2m&temperature_unit=fahrenheit'
    const response = await fetch(url)
    const data = await response.json();

    return (
      <h3>{data.hourly["temperature_2m"][0] + 'degrees F'}</h3>
    )
}

export default function MyWeather() {
  return (
    <>
      <h2>Today's Date and Weather</h2>
      <MyDate />
      <ShowTemp />
    </>
  );
}
