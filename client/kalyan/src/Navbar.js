import React, { useState } from 'react';
import dp from './dp.jpg';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white flex items-center flex-row lg:flex-row justify-between px-10 py-8 ">
      <div className="flex items-center flex-row" onClick={()=>{window.location.href="/"}}>
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
        <a href='https://www.youtube.com/@thekalyan007' className="bg-red-500 text-white px-5 py-1 rounded-full hover:bg-purple-500 hover:text-black hover:shadow-md hover:shadow-purple-200 cursor-pointer">SUBSCRIBE</a>
        </div>

      

      {/* Mobile Menu Button */}
      <div className="relative flex items-center space-x-3 ">
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center p-2 rounded-md hover:bg-gray-800"
        >
        <GiHamburgerMenu  size={24} color='white'/>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full right-0 mt-3  bg-gray-900 rounded-md shadow-md md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="block px-8 py-3 hover:bg-gray-800">HOME</a>
          <a href="/about" className="block px-8 py-3 hover:bg-gray-800 mb-2">ABOUT</a>
          <a href='https://www.instagram.com/thekalyan07/' className="bg-red-500 text-white px-2 py-2  ml-2 rounded-full hover:bg-red-700">SUBSCRIBE</a>
          <a href="/" className="block px-8 py-3 hover:bg-gray-800 mb-2"></a>

        </div>
      </div>

    <div className='flex flex-row '>
    <section class=" justify-center items-center">
  <button
    href="/"
    class="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-pink-600 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413] mr-5"
  onClick={()=>{window.open("https://www.instagram.com/thekalyan07/", "_blank");}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1.2em"
      viewBox="0 0 24 24"
      stroke-width="1"
      fill="currentColor"
      stroke="currentColor"
      class="w-5"
    >
      <path
        d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"
      ></path>
    </svg>
    <span
      class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
    >
      Instagram
    </span>
  </button>
</section>

<section class="flex justify-center items-center">
  <button
    href="/"
    class="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#0088cc] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#005f99] hover:to-[#003366]"
    onClick={()=>{window.open("https://telegram.me/pycrafthub", "_blank");}}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1.2em"
      viewBox="0 0 256 256"
      fill="currentColor"
      class="w-5"
    >
      <path
        d="M128 0C57.305 0 0 57.307 0 128s57.305 128 128 128c70.693 0 128-57.307 128-128S198.693 0 128 0zm48.043 80.934l-24.012 113.28c-1.8 7.718-6.644 9.64-13.39 5.982L107 162.09l-12.297 11.818c-1.363 1.363-2.507 2.507-5.128 2.507l1.836-25.76 59.508-53.893c2.583-2.298-.565-3.582-4.008-1.283L80.11 146.368l-24.857-7.76c-8.541-2.666-8.666-8.666 1.807-12.798l114.595-44.072c5.346-2.007 10.037 1.283 8.388 9.196z"
      />
    </svg>
    <span
      class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
    >
      Telegram
    </span>
  </button>
</section>



    </div>
      
    </nav>
  );
};

export default Navbar;
