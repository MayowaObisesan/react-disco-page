import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [buttonValue, setButtonValue] = useState(2);
  const arrayOfColors = ["red", "green", "blue", "orange", "cyan", "magenta", "pink", "white", "tomato", "navajowhite", "purple", "violet", "skyblue"];

  function handleClickButton() {
    // My logic goes here.
    const newButtonValue = buttonValue * 2;
    setButtonValue(newButtonValue);
  }

  function handlePageColorChange() {
    const valueBetween0and10 = Math.round(Math.random() * arrayOfColors.length - 1);
    console.log(valueBetween0and10, arrayOfColors[valueBetween0and10]);

    document.body.style.backgroundColor = arrayOfColors[valueBetween0and10];
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={handleClickButton}>{buttonValue}</button>

        <br /><br />

        <button onClick={handlePageColorChange}>Change Page color</button>

        {/* <div>{valueBetween0and13}</div> */}
      </div>
    </>
  )
}

export default App
