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
  const nav=useNavigate();
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
                <div className="flex space-x-4">
                  {[
                    { 
                      name: 'github',
                      path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    },
                    { 
                      name: 'X',
                      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
                    },
                    { 
                      name: 'instagram',
                      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
                    },
                    { 
                      name: 'linkedin',
                      path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                    }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d={social.path}
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
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
                    { name: 'Privacy Policy', href: '/privacy-policy"' },
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
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-pink-400 mt-1 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                    </svg>
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