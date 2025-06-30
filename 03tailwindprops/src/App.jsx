import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Card userName = "Ape - 1" serialNo = "345" price="$2" />
      <Card userName = "Ape - 2" serialNo = "346" price="$1"/>
      <Card/>

    </>
  )
}

export default App
