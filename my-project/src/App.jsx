import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username : "chai",
    price : 25
  }
  let newArr = [ 1, 2, 3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
     <Card username = "chaiaurcode" btntext = "click me"
     />
     <Card username = "akash" btntext= "visit me"/>
     <Card username = "anup" />
     <Button />
    </>
  )
}

export default App
