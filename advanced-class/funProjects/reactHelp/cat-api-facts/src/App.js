import cat from './cat.jpeg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [pageNumber, setPageNumber] = useState(1)
  const [catFacts, setCatFacts] = useState([])

  const onClickPrevious = () => {
    setPageNumber((previousPageNumber) => 
      previousPageNumber > 1 ? previousPageNumber - 1 : 1
    )
  }

  const onClickNext = () => {
    setPageNumber((previousPageNumber) => 
      previousPageNumber + 1
    )
  }
  
  useEffect(() => {
    fetchFacts(pageNumber).then((fetchCatFacts) => setCatFacts(fetchCatFacts))
  },[pageNumber])


  return (
    <main className='container'>
      <img src={cat} alt='Cat Picture' />
      <h2>Cat Facts</h2>
      <h3>Page Number {pageNumber}</h3>
      <ul>
        {catFacts.map(item => {
          <li>{item.fact}</li>
        })}
      </ul>
      <button onClick={onClickPrevious}>Previous</button>
      <button onClick={onClickNext}>Next</button>
    </main>
  )
}

async function fetchFacts(pageNumber) {
  const url = `https://catfact.ninja/facts?pages=${pageNumber}`
  const response = await fetch(url)
  const json = await response.json()
  return json.data
}

export default App;
