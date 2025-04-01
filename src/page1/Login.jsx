import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const login = () => {
  // State for email and password (Two-way binding)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form submission handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted:', { email, password });

    setEmail('');
    setPassword('');
  };

  

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-100 px-4">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="username">
                Username
              </label>
              <input
                required
                type="email"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
              />
            </div>
            <button
              onClick={() => navigate("/NavBar2")}
              className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;