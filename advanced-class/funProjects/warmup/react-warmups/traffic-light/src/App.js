import { useState } from 'react';
import './App.css';

function App() {

  const changeColor = () => {
    let newColor;

    if(color === 'red'){
      newColor = 'yellow'
    } 
    else if (color === 'yellow') {
      newColor = 'green'
    }
    else {
      newColor = 'red'
    }

    setColor(newColor)
  }

  const [color, setColor] = useState('red');

  return (
    <main className='container'>
      <div className={`red circle ${color === 'red' ? 'filled' : ''}`}></div>
      <div className={`yellow circle ${color === 'yellow' ? 'filled' : ''}`}></div>
      <div className={`green circle ${color === 'green' ? 'filled' : ''}`}></div>
      <button onClick={changeColor}>Change Traffic Light</button>
      </main>
  );
}

export default App;
