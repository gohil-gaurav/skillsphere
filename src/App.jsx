import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar2 from './page2/NavBar2'

import { NavBar } from './page1/NavBar'
import MyCource from './page2/MyCource'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <MyCource/> 

     {/* <NavBar/> */}
     {/* <NavBar2/> */}

    </>
  )
}

export default App
