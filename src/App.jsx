import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './page1/NavBar';
import Login from './page1/login';
import CourseList from './page1/CourseList';
import FAQSection from './page1/FAQSection';


function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      </div>
     <CourseList />
     <FAQSection />


    </>
  );
}

export default App;