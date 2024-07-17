import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'flowbite-react';
import Navigation from '../navbar/Navigation';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDarkMode } = useTheme();

  return (
    <header className={`transition-colors duration-500 ease-in-out flex flex-wrap items-center justify-between px-4 py-3 ${isDarkMode ? 'bg-black text-gray-50' : 'bg-white text-gray-900'}`}>
      <div className="flex items-center gap-3">
        <img className="w-6 h-6 rounded-full" src="https://avatars.githubusercontent.com/u/128321469?v=4" alt="Icon" />
        <Link to="/" className="text-sm hover:underline md:text-lg text-gray-900 dark:text-gray-100">
        iZack
      </Link>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
