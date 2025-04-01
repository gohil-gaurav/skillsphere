
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar2 from './page2/NavBar2'

import { NavBar } from './page1/NavBar'


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './page1/login';
import CourseList from './page1/CourseList';
import FAQSection from './page1/FAQSection';
import AboutUs from './page1/AboutUs';

import Coursecard from './page2/Coursecard'

import NavBar2 from './page2/NavBar2';



function App() {
  return (
    <>



      <NavBar/>
      <NavBar2/>

      <div>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

    <div>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NavBar2" element={<NavBar2 />} />
      </Routes>

      </div>
      <CourseList />
      <FAQSection />
      <AboutUs />
      <Coursecard/>


    </>
  );
}

export default App;