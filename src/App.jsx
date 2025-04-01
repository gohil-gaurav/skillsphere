import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './page1/NavBar';
import Login from './page1/login';
import CourseList from './page1/CourseList';
import FAQSection from './page1/FAQSection';
import AboutUs from './page1/AboutUs';
import NavBar2 from './page2/NavBar2';


function App() {
  return (
    <>
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


    </>
  );
}

export default App;