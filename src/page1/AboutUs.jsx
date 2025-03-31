import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold text-orange-500">SkillSphere</span>, we are dedicated to providing
          high-quality education resources for competitive exams like JEE, NEET, UPSC, and GATE. 
          Our expert instructors and well-structured courses ensure that students get the best learning experience.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {/* Card 1 - Our Mission */}
        <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
          <h3 className="text-2xl font-semibold text-gray-700">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            Empower students with the best learning resources to help them achieve success in competitive exams.
          </p>
        </div>

        {/* Card 2 - Our Vision */}
        <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
          <h3 className="text-2xl font-semibold text-gray-700">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            To become the leading online education platform by providing quality content, mentorship, and career guidance.
          </p>
        </div>

        {/* Card 3 - Why Choose Us */}
        <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
          <h3 className="text-2xl font-semibold text-gray-700">Why Choose Us?</h3>
          <p className="text-gray-600 mt-2">
            We offer structured courses, expert faculty, interactive learning, and a strong student community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
