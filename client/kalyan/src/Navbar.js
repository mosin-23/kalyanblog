import React, { useState } from 'react';
import dp from './dp.jpg';
import { Link } from 'react-router-dom';
import SearchBar from './Search'; // Assuming you have the SearchBar component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white flex items-center flex-col lg:flex-row justify-between px-10 py-8 ">
      <div className="flex items-center flex-row">
        <img src={dp} alt="Blog Logo" className="w-10 h-10 rounded-full mr-3" />
        <span className="text-xl font-bold italic font-serif mr-2"><h1>KALYAN.V</h1></span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-20">
        <a className="hover:text-blue-500 font-semibold cursor-pointer"><Link to="/">HOME</Link></a>
        <a  className="hover:text-blue-500 font-semibold cursor-pointer"><Link to="/about">ABOUT</Link></a>
        <a href='https://www.instagram.com/thekalyan07/' className="bg-red-500 text-white px-5 py-1 rounded-full hover:bg-purple-500 hover:text-black hover:shadow-md hover:shadow-purple-200 cursor-pointer">SUBSCRIBE</a>
        </div>

      {/* Search Bar (Desktop) */}
      <div className="hidden md:flex items-center space-x-3">
        <SearchBar />
      </div>

      {/* Mobile Menu Button */}
      <div className="relative flex items-center space-x-3">
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center p-2 rounded-md hover:bg-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full right-0 mt-3 bg-gray-900 rounded-md shadow-md md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="block px-8 py-3 hover:bg-gray-800">HOME</a>
          <a href="/about" className="block px-8 py-3 hover:bg-gray-800 mb-2">ABOUT</a>
          <a href='https://www.instagram.com/thekalyan07/' className="bg-red-500 text-white px-2 py-2  ml-2 rounded-full hover:bg-red-700">SUBSCRIBE</a>
          <a href="/" className="block px-8 py-3 hover:bg-gray-800 mb-2"></a>

        </div>
      </div>

      {/* Mobile Search Bar */}
      {!isMenuOpen && (
        <div className="md:hidden w-full mt-2">
          <SearchBar />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
