import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameComponent from './components/NameComponents';
import Counter from './components/Counter';
import ColorSwitcher from './components/ColorSwitch';
import Footer from './components/Footer';
import CustomButton from './components/Button';

function App() {
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

      <NameComponent text={"Vite + React"} imgSrc={"https://www.jetbrains.com/grazie/img/Grazie.svg"} />
      <NameComponent text={"My name is Mayowa"} />

      <div className="card">
        <Counter></Counter>
        <br /><br />
        <ColorSwitcher></ColorSwitcher>

        <br />
        <CustomButton text={"Button 1"}></CustomButton>
        <CustomButton text={"Button 2"} color={"green"}></CustomButton>
        <CustomButton text={"Submit"} bg={"green"} color={"white"}></CustomButton>
        <CustomButton text={"Cancel"} bg={"rose"} customClick={() => alert('clicked button')}></CustomButton>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
