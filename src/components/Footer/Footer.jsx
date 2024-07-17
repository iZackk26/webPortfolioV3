import React from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} w-full`}>
      <div className="w-full max-w-full mx-auto px-4 py-8 pt-20">
        <div className="flex flex-wrap justify-between items-center">
          <a href="https://github.com/iZackk26" className="flex items-center mb-4 md:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://avatars.githubusercontent.com/u/128321469?v=4" className="h-8 w-8 rounded-full" alt="iZack Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">iZack</span>
          </a>
          <ul className="flex flex-wrap justify-center items-center mb-4 md:mb-0 text-sm font-medium">
            <li>
              <Link to="/about" className="text-sm mr-4 md:mr-6 hover:underline md:text-lg text-gray-900 dark:text-gray-100">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm mr-4 md:mr-6 hover:underline md:text-lg text-gray-900 dark:text-gray-100">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/spotify" className="text-sm mr-4 md:mr-6 hover:underline md:text-lg text-gray-900 dark:text-gray-100">
                Spotify
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div className="text-center">
          <span className="block text-sm">© 2024 <a href="/" className="hover:underline">Isaac™</a>. All Rights Reserved.</span>
          <span className="block text-sm"><a href="https://github.com/iZackk26/PortfolioV2" className="hover:underline">This web portfolio is almost finished and will be updated weekly. Check for updates on my GitHub</a></span>
        </div>
      </div>
    </footer>
  );
}
