import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>{setColor("red")}}// onClick() expect a function that is why we are passing a callback function and with 
          // the CB fun we are calling our setColor("colorNmae") function.Because we want to give a parameter to out setColor() fun.
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={()=>{setColor("white")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}
          >White</button>

          <button
          onClick={()=>{setColor("black")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>

          <button
          onClick={()=>{setColor("pink")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>

          <button
          onClick={()=>{setColor("purple")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>

          <button
          onClick={()=>{setColor("cyan")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "cyan"}}
          >Cyan</button>

          <button
          onClick={()=>{setColor("magenta")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "magenta"}}
          >Magenta</button>



        </div>
      </div>
    </div>
  )
}

export default App
