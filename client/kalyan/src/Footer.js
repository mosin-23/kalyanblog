import React from 'react';
import dp from './dp.jpg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 bg-gray-900 text-white rounded-md">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://kalyan-portfolio.com/" // Replace with your portfolio or personal website
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={dp} // Replace with your logo link
                className="h-8 rounded-full"
                alt="Kalyan's Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Kalyan Tech
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/about" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Connect
                </a>
              </li>
              <li>
                <a href="/admin/login" className="hidden lg:block hover:underline me-4 md:me-6">
                  Admin
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thekalyan07/" className="hover:underline">
                <Link to="/subscribe">
                <button 
  class="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
>
  <span
    class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
  >
  </span>
  <span
    class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
  >
    SUBSCRIBE
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
      ></path>
    </svg>
  </span>
</button>
</Link>
                </a>
              </li>
            </ul>
          </div>

          
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{' '}
            <a
              href="https://www.instagram.com/thekalyan07/" // Replace with your portfolio or personal website
              className="hover:underline"
            >
              VKalyan.Tech
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
