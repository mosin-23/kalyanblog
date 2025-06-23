import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import dp from './dp.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');     
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://kalyanblog.onrender.com/kalyan/adduser", { name, email });
      console.log(name, email);
      if (response.status === 201 || response.status === 200) {
        toast.success("You are subscribed! Thank you.");
        setName("");
        setEmail("");
      }
    } catch (error) {
      toast.error("Try again after some time.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-16" id='footer'>
        <footer className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-500 mix-blend-screen filter blur-3xl animate-float"></div>
            <div className="absolute top-3/4 left-3/4 w-64 h-64 rounded-full bg-purple-500 mix-blend-screen filter blur-3xl animate-float-delay"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Brand section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="relative group">
                    <img
                      src={dp}
                      className="h-12 w-12 rounded-full border-2 border-white shadow-lg group-hover:border-pink-300 transition-all duration-300"
                      alt="Kalyan's Logo"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-purple-300 animate-ping opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                  </div>
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
                    Kalyan Tech
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Crafting digital experiences that inspire and engage. Let's build something amazing together.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-pink-300 tracking-wider uppercase">
                  Quick Links
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'About', href: '/about' },
                    { name: 'Disclaimer', href: '/disclaimer' },
                    { name: 'Privacy Policy', href: '/privacy-policy' },
                    { name: 'Admin', href: '/admin/login' }
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                      >
                        <svg
                          className="h-4 w-4 mr-2 text-pink-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-sm font-semibold text-pink-300 tracking-wider uppercase">
                  Newsletter
                </h3>
                <p className="mt-6 text-gray-300 text-sm">
                  Subscribe to get updates on new projects and articles.
                </p>
                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-500 focus:outline-none text-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-500 focus:outline-none text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-medium text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-sm font-semibold text-pink-300 tracking-wider uppercase">
                  Contact
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-pink-400 mt-1 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-300">2100031660cser@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />
            <span className="block text-sm text-gray-200 sm:text-center dark:text-gray-400">
              © 2025{' '}
              <a
                href="https://www.instagram.com/thekalyan07/"
                className="hover:underline"
              >
                VKalyan.Space
              </a>
              . All Rights Reserved.{" "}
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </span>
          </div>
        </footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default Footer;
