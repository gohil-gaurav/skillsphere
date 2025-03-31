import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import { Routes } from 'react-router-dom'
import NavBar2 from './page2/NavBar2'
import { NavBar } from './page1/NavBar'
import { Route } from 'react-router-dom'
import Login from './page1/login'
import Imag from './page1/imag'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/Login" element={<Login />} />
       
 
     </Routes>

    
     <Imag/>
    </>
  )
}

export default App
