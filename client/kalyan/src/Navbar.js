import React, { useState, useEffect } from 'react';
import dp from './dp.jpg';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube, FaInstagram, FaTelegram } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };
    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-pink-900/90 backdrop-blur-md py-3 shadow-xl' : 'bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-900 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div 
            className="flex-shrink-0 flex items-center group cursor-pointer"
            onClick={() => window.location.href = "/"}
          >
            <div className="relative">
              <img 
                src={dp} 
                alt="Kalyan's Logo" 
                className="h-10 w-10 rounded-full border-2 border-white group-hover:border-pink-300 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-purple-300 animate-ping opacity-0 group-hover:opacity-70 transition-all duration-1000"></div>
            </div>
            <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
              KALYAN.V
              <span className="inline-block ml-2 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${activeLink === '/' ? 'text-pink-300' : 'text-gray-300 hover:text-white'}`}
            >
              HOME
              {activeLink === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 rounded-full animate-underline"></span>
              )}
            </Link>
            <Link 
              to="/about" 
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${activeLink === '/about' ? 'text-pink-300' : 'text-gray-300 hover:text-white'}`}
            >
              ABOUT
              {activeLink === '/about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 rounded-full animate-underline"></span>
              )}
            </Link>
            
            {/* Subscribe Button */}
            <button
              onClick={scrollToFooter}
              className="relative px-6 py-2 font-medium text-white transition-all duration-500 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                SUBSCRIBE
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-4">
              <a 
                href="https://www.youtube.com/@thekalyan007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-red-500 transition-colors duration-300 relative group"
              >
                <FaYoutube className="w-5 h-5" />
                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  YouTube
                </span>
              </a>
              <a 
                href="https://www.instagram.com/thekalyan07/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-pink-500 transition-colors duration-300 relative group"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Instagram
                </span>
              </a>
              <a 
                href="https://t.me/kdealsforyou" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
              >
                <FaTelegram className="w-5 h-5" />
                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Telegram
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={scrollToFooter}
              className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <RiCloseLine className="h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-gradient-to-b from-purple-900 to-indigo-900 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-medium px-6 py-3 rounded-lg transition-all duration-300 ${activeLink === '/' ? 'text-pink-300 bg-white/10' : 'text-white hover:text-pink-300'}`}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-medium px-6 py-3 rounded-lg transition-all duration-300 ${activeLink === '/about' ? 'text-pink-300 bg-white/10' : 'text-white hover:text-pink-300'}`}
          >
            ABOUT
          </Link>
          
          <button
            onClick={scrollToFooter}
            className="px-8 py-3 text-xl font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-transform hover:scale-105"
          >
            SUBSCRIBE
          </button>

          <div className="flex space-x-8 pt-10">
            <a 
              href="https://www.youtube.com/@thekalyan007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-red-500 transition-colors duration-300"
            >
              <FaYoutube className="w-8 h-8" />
            </a>
            <a 
              href="https://www.instagram.com/thekalyan07/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a 
              href="https://t.me/kdealsforyou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaTelegram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;