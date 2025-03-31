import React, { useState } from 'react';

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
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
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
                className="border rounded w-full py-2 px-3"
                id="username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
              required 
                        type='password' 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                className="border rounded w-full py-2 px-3"
                id="password"
              />
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
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
