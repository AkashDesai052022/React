import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 6;

  const addValue = ()=>{
    console.log("value cliked", counter)
    // counter = counter + 1 
    
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }

  const removeValue = ()=>{

    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value :{counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>

      <button
      onClick={removeValue}
      >remove value  {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
