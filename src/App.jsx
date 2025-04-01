
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar2 from './page2/NavBar2'

import { NavBar } from './page1/NavBar'
import MyCource from './page2/MyCource'


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './page1/NavBar';
import Login from './page1/login';
import CourseList from './page1/CourseList';
import FAQSection from './page1/FAQSection';
import AboutUs from './page1/AboutUs';


function App() {
  return (
    <>

     <MyCource/> 

     {/* <NavBar/> */}
     {/* <NavBar2/> */}

    <div>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      </div>
     <CourseList />
     <FAQSection />
     <AboutUs />


    </>
  );
}

export default App;