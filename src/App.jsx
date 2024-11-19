import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import { FaMoneyBillWave } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import Avatar from './Avatar'

{/* <FaMoneyBillWave className='famoney' /> */}

function App() {
  
  function handleClick(){
    console.log('working')
  }

  return (
    <main>
      <Avatar/>
    </main>
  )
}

export default App
