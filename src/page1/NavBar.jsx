import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import CountUp from "react-countup";

export const NavBar = () => {
  const navigate = useNavigate();
  const images = [image1, image2, image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="brightness-50 absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-transparent">
        {/* Logo Section */}
        <div className="ml-4 md:ml-10 flex items-center space-x-2">
          <img
            className="w-8 h-8 md:w-10 md:h-10"
            src="https://previews.123rf.com/images/emcrea14/emcrea142102/emcrea14210206375/164602047-ss-letter-logo-design-with-book-icons-modern-education-logo-concept.jpg"
            alt="no logo"
          />
          <h1 className="text-sm md:text-lg font-bold text-white">skillsphere</h1>
        </div>

        {/* Navigation Links */}
        <div className="mr-4 md:mr-10">
          <ul className="flex space-x-4 md:space-x-10 items-center">
            <li className="text-xs md:text-sm lg:text-base text-white cursor-pointer">
              Skill
            </li>
            <li className="text-xs md:text-sm lg:text-base text-white cursor-pointer">
              Course
            </li>
            <li
              onClick={() => navigate("/login")}
              className="flex items-center justify-center rounded-full border-2 border-white h-8 w-16 md:h-10 md:w-20 text-xs md:text-sm text-white cursor-pointer"
            >
              Log in
            </li>
            <li
              onClick={() => navigate("/login")}
              className="bg-orange-500 flex items-center justify-center rounded-full border-2 h-8 w-16 md:h-10 md:w-20 text-xs md:text-sm text-white cursor-pointer"
            >
              Sign in
            </li>
          </ul>
        </div>
      </nav>

      {/* Divider Line */}
     /

      {/* Counter Section */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap justify-around items-center w-full max-w-3xl px-4 text-white">
        {/* Student Trust */}
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="flex items-center text-3xl md:text-5xl font-bold">
            <CountUp end={1987} start={100} duration={6} />
            <span className="ml-1">+</span>
          </div>
          <span className="text-lg md:text-2xl font-semibold mt-2">
            Student Trust
          </span>
        </div>

        {/* Student Pass */}
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="flex items-center text-3xl md:text-5xl font-bold">
            <CountUp end={255} start={0} duration={7} />
            <span className="ml-1">+</span>
          </div>
          <span className="text-lg md:text-2xl font-semibold mt-2">
            Student Pass
          </span>
        </div>

        {/* Students in IIT */}
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="flex items-center text-3xl md:text-5xl font-bold">
            <CountUp end={100} start={1} duration={8} />
            <span className="ml-1">+</span>
          </div>
          <span className="text-lg md:text-2xl font-semibold mt-2">
            Students in IIT
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;