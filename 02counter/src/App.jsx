import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  // counter is a variable which is controlled by the setCounter function. We can change these names also.

  const addValue = ()=>{
    if(counter<20)
    setCounter(counter+1);
  }

  const removeValue = ()=>{
    if(counter>0)
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Counter</button><br />
      <button onClick={removeValue}>Decrease Counter</button>
    </>
  )
}

export default App
