import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import { FaMoneyBillWave } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"

{/* <FaMoneyBillWave className='famoney' /> */}

function App() {
  
  function handleClick(){
    console.log('working')
  }

  return (
    <main>
      <Button  variant='warning' size="lg" onClick={handleClick} className="green">
        <FcGoogle className='famoney' />
        {'Buy now'} 
      </Button>
    </main>
  )
}

export default App
