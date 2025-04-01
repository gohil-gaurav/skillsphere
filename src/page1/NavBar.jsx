import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import CountUp from "react-countup";
import { BiMenuAltRight } from "react-icons/bi";

export const NavBar = () => {
  const navigate = useNavigate();
  const images = [image1, image2, image3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image Slider */}
      <div
        className="brightness-50 absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-5000 md:z-0"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-transparent">
        {/* Logo */}
        <div className="ml-4 md:ml-10 flex items-center space-x-2">
          <img
            className="w-8 h-8 md:w-10 md:h-10"
            src="https://previews.123rf.com/images/emcrea14/emcrea142102/emcrea14210206375/164602047-ss-letter-logo-design-with-book-icons-modern-education-logo-concept.jpg"
            alt="SkillSphere Logo"
          />
          <h1 className="text-sm md:text-lg font-bold text-white">
            SkillSphere
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex mr-4 md:mr-10">
          <ul className="flex space-x-4 md:space-x-10 items-center">
            <li className="text-xs md:text-sm lg:text-base text-white cursor-pointer">
              Skill
            </li>
            <li
              onClick={scrollToCourses}
              className="text-xs md:text-sm lg:text-base text-white cursor-pointer"
            >
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

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <BiMenuAltRight className="text-3xl text-white" />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-75 text-white p-4  md:z-1 md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <li
              onClick={() => setMenuOpen(false)}
              className="text-lg cursor-pointer"
            >
              Skill
            </li>
            <li
              onClick={() => {
                setMenuOpen(false);
                scrollToCourses();
              }}
              className="text-lg cursor-pointer"
            >
              Course
            </li>
            <li
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
              className="text-lg cursor-pointer"
            >
              Log in
            </li>
            <li
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
              className="text-lg bg-orange-500 py-2 px-4 rounded-full cursor-pointer"
            >
              Sign in
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center md:z-0  text-white text-center w-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-poppins md:z-0">
          Welcome to SkillSphere
        </h1>
        <p className="text-base sm:text-lg md:text-2xl font-semibold mt-2 md:z-0">
          Padhlo chahe kahin se, Manzil milegi yahi se!
        </p>
      </div>

      {/* Counter Section (Reduced Margin) */}
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center justify-center w-full max-w-3xl px-8 text-white space-y-6 md:space-y-0 md:space-x-10">
        {/* Student Trust */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center text-2xl sm:text-3xl md:text-5xl font-bold">
            <CountUp end={1987} start={100} duration={6} />
            <span className="ml-1">+</span>
          </div>
          <span className="text-sm sm:text-lg md:text-2xl font-semibold mt-2">
            Student Trust
          </span>
        </div>

        {/* Student Pass */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center text-2xl sm:text-3xl md:text-5xl font-bold">
            <CountUp end={255} start={0} duration={7} />
            <span className="ml-1">+</span>
          </div>
          <span className="text-sm sm:text-lg md:text-2xl font-semibold mt-2">
            Student Pass
          </span>
        </div>

        {/* Students in IIT */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center text-2xl sm:text-3xl md:text-5xl font-bold">
            <CountUp end={100} start={1} duration={8} />
            <span className="ml-1">+</span>
          </div>
          <span className="text-sm sm:text-lg md:text-2xl font-semibold mt-2">
            Students in IIT
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
