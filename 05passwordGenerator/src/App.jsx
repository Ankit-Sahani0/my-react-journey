// Importing React hooks and other assets
import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState to manage password length
  const [length, setLength] = useState(6);

  // useState to check if numbers should be included
  const [numberAllowd, setNumberAllowed] = useState(false);

  // useState to check if special characters should be included
  const [charAllowd, setcharAllowed] = useState(false);

  // useState to store the final generated password
  const [password, setPassword] = useState("");

  // useRef to get reference of input field for copy-to-clipboard functionality
  const passwordRef = useRef(null);

  // useCallback to define the password generator function
  // Memoized so it only re-creates if dependencies change
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Add numbers if checkbox is checked
    if (numberAllowd) str += "0123456789";

    // Add special characters if checkbox is checked
    if (charAllowd) str += "!@#$%^&*-_+=[]{}~`";

    // Generate password of selected length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    // Update state with generated password
    setPassword(pass);
  }, [length, numberAllowd, charAllowd, setPassword]);

  // useCallback to copy password to clipboard using ref
  const copyPasswordToClipboard = useCallback(() => {
    // Select the text in input field
    passwordRef.current?.select();

    // Copy selected text to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect to auto-generate password on initial render
  // or whenever length, numberAllowd or charAllowd change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowd, charAllowd, passwordGenerator]);

  return (

    

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>

      {/* Password display and copy button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder='password'
          readOnly
          ref={passwordRef} // Reference for copying
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard} // Trigger copy
        >
          copy
        </button>
      </div>

      {/* Controls: Range slider and checkboxes */}
      <div className='flex text-sm gap-x-2'>

        {/* Password length range input */}
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={99}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }} // Update length
          />
          <label>Length: {length}</label>
        </div>

        {/* Checkbox to include numbers */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowd}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev); // Toggle number inclusion
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Checkbox to include special characters */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowd}
            id='charInput'
            onChange={() => {
              setcharAllowed((prev) => !prev); // Toggle character inclusion
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
