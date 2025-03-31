import React, { useEffect, useState } from "react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

export const imag = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className=" z-10 brightness-60 bg-black items-center  object-contain md:object-cover text-white h-155">
        
        <img
          className=" z-0  h-155 w-full object-fill "
          src={images[currentIndex]}
          alt="Placeholder"
        />
        </div>
     
    </>
  );
};

export default imag;
