import React, { useState, useEffect, useRef } from "react";
const Coursecard = ({ courseSectionRef }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json") 
      .then((response) => response.json())
      .then((data) => setCourses(data.courses))
      .catch((error) => console.error("Error loading courses:", error));
  }, []);
    return (
        <div ref={courseSectionRef} className="h-225 bg-gray-100 p-6 overflow-y-auto">
    
        
        {courses.map((course) => (
        <div key={course.id} className="container flex bg-amber-50 gap-10 p-10">
            <img className='h-60'src={course.image} alt={course.name} />
            <div className="contant text-black w-full ">
                <h1 className='w-full text-3xl mb-4'>{course.name}</h1>
                <p>{course.description}</p>
                <p className='mt-5'>Price: ₹{course.price}</p>
                <button className="mt-5 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
              Enroll Now
            </button>
            </div>
        </div>
        
           ))}
           </div>
    )
}

export default Coursecard
