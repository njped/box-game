import './App.css';
import { useState } from 'react';


export default function App() {
  const [inputs, setInputs] = useState([]);
  
  function addArray() {
    const userInput = document.querySelector('input').value
    setInputs([...inputs, userInput])
  }

  function deleteArrayInput () {
    
  }
  
    return (
      <div className='container'>
        <h1>To Do List</h1>
        <div className='addToDo'>
          <input className='userInput' type="text" />
          <button className='addBtn' onClick={addArray}>Add</button>
        </div>
          {inputs.map(values => {
            return (
              <main className='listContainer'>
                <div className='todo'>
                  {values}
                  <button className='deleteBtn' onClick={deleteArrayInput}>Delete</button>
                </div>
              </main>
            )
          })}
      </div>
    )
  
};
