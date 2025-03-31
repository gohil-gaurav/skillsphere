import React, { useState, useEffect } from "react";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => setCourses(data.courses))
      .catch((error) => console.error("Error loading courses:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Available Courses</h1>

      <div className="flex flex-wrap gap-6 justify-center ">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4 w-72 hover:bg-gray-100 transition duration-300 hover:-translate-y-2">
            <img
              src={course.image}
              alt={course.name}
              className="rounded-lg w-full h-40 object-cover"
            />
            <h2 className="text-lg font-bold mt-3">{course.name}</h2>
            <p className="text-gray-600 text-sm mt-1">Price: ₹{course.price}</p>
            <button className="mb-2 mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 ">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
