import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setIsLogged }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://kalyanblog.onrender.com/kalyan/auth/verify',
        { email, password }
      );

      if (response.data.success) {
        setMessage('Login successful!');
        setIsLogged(true);
        localStorage.setItem('success', 'true');
        navigate('/admin/createblog');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
      toast.error(error.response?.data?.message || 'Login failed', {
        position: 'top-center',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-28 bg-gradient-to-br from-indigo-50 to-blue-100">
      <div
        id="login"
        className="w-80 bg-white rounded-lg shadow-lg p-6 text-indigo-500"
      >
        <form onSubmit={handleLogin}>
          <fieldset className="border-4 border-dotted border-indigo-500 p-5 rounded-md">
            <legend className="px-2 italic -mx-2">Welcome again!</legend>

            <label
              className="block text-xs font-bold mt-4 after:content-['*'] after:text-red-400"
              htmlFor="email"
            >
              Mail
            </label>
            <input
              className="w-full p-2 mt-1 mb-2 rounded border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label
              className="block text-xs font-bold mt-2 after:content-['*'] after:text-red-400"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 mt-1 mb-4 rounded border border-indigo-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              className="w-full rounded bg-indigo-500 text-white p-2 font-bold hover:bg-indigo-400 transition duration-300"
              type="submit"
            >
              Log In
            </button>
          </fieldset>
        </form>

        {message && (
          <p className="text-center text-indigo-600 mt-3 font-medium">
            {message}
          </p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
