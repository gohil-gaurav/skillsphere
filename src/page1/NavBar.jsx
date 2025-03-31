import React from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex justify-between items-center bg-white p-4 text-black shadow-md">
        <div className="left flex align-center items-center space-x-2 gap-5">
          <img
            className="w-10 h-10"
            src="https://previews.123rf.com/images/emcrea14/emcrea142102/emcrea14210206375/164602047-ss-letter-logo-design-with-book-icons-modern-education-logo-concept.jpg"
            alt="no logo"
          />
          <h1>skillsphere</h1>
        </div>
        <div className="right">
          <ul className="flex space-x-4 gap-4 mr-25 items-center align-center justify-center ">
            <li>skill</li>
            <li>course</li>
            <li
              onClick={() => navigate("/login")}
              className="bg-amber-50 flex items-center align-center justify-center rounded-full border-2 h-10 w-20 text-black "
            >
              log in
            </li>
            <li
              onClick={() => navigate("/login")}
              className="bg-orange-500 flex items-center align-center justify-center rounded-full border-2-black h-10 w-20 text-wwhite"
            >
              sign in
            </li>
          </ul>
        </div>
      </nav>
      <div className="h-0.5 w-full bg-black "></div>
    </>
  );
};

export default NavBar;
