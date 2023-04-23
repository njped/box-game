import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [dogs, setDogs] = useState([])
  const [cursor, setCursor] = useState(0);

  
  useEffect(() => {
    const initData = async () => {
      setDogs(await fetchData())
    }
    initData()
  }, [])

  return (
    <div className='container'>
      <h1>Dogs</h1>
      <div>
        {
          dogs.slice(0, 9).map((imgSrc) => {
            <img src={imgSrc} />
          })
        }
      </div>
    </div>
  );
}

async function fetchData() {
const url = 'https://dog.ceo/api/breeds/image/random'

const response = await fetch(url);
return await response.json();

}

export default App;
