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
    e.preventDefault(); // Prevent form submission from refreshing the page

    try {
      // Send the email and password to the backend
      const response = await axios.post('https://kalyanblog.onrender.com/kalyan/auth/verify', { email, password });

      if (response.data.success) {
        setMessage("Login successful!");
        setIsLogged(true);
        localStorage.setItem('success', 'true'); // Store the success flag in localStorage
        navigate('/admin/createblog'); // Redirect on successful login
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
      toast.error(error.response?.data?.message || 'Login failed', { position: 'top-center' });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div id="login" className="w-64 h-80 bg-indigo-50 rounded shadow flex flex-col justify-between p-3">
        <form className="text-indigo-500" onSubmit={handleLogin}>
          <fieldset className="border-4 border-dotted border-indigo-500 p-5">
            <legend className="px-2 italic -mx-2">Welcome again!</legend>

            <label className="text-xs font-bold after:content-['*'] after:text-red-400" htmlFor="email">
              Mail
            </label>
            <input
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="text-xs font-bold after:content-['*'] after:text-red-400" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              className="w-full rounded bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400"
              type="submit"
            >
              Log In
            </button>
          </fieldset>
        </form>

        {message && <p className="text-center text-indigo-500 mt-3">{message}</p>}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
