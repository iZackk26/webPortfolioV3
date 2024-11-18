import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from '../../context/ThemeContext';
import { FaProjectDiagram } from "react-icons/fa"; // Icono para Projects
import { AiOutlineInfoCircle } from "react-icons/ai"; // Icono para About
import { MdContactMail } from "react-icons/md"; // Icono para Contact
import LanguageSwitcher from '../buttons/LanguageSwitcher';

const Navigation = () => {
  const { toggleTheme } = useTheme();
  const [isRotated, setIsRotated] = useState(false);

  const handleToggleTheme = () => {
    setIsRotated(!isRotated);
    toggleTheme();
  };

  return (
    <nav className="flex items-center gap-6">
      {/* Projects Link */}
      <Link
        to="/projects"
        className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-200 hover:underline"
      >
        <FaProjectDiagram className="h-4 w-4 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
      </Link>

      {/* About Link */}
      <Link
        to="/about"
        className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-200 hover:underline"
      >
        <AiOutlineInfoCircle className="h-4 w-4 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
      </Link>

      {/* Contact Link */}
      <Link
        to="/contact"
        className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-200 hover:underline"
      >
        <MdContactMail className="h-4 w-4 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
      </Link>

      {/* Dark Mode Toggle */}
      <button
        aria-label="Toggle dark mode"
        className={`text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 transition-transform duration-500 ${
          isRotated ? 'rotate-180' : ''
        }`}
        onClick={handleToggleTheme}
      >
        <CgDarkMode className="h-4 w-4 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
      </button>
        
        {/* Language Switcher */}
        <LanguageSwitcher />
    </nav>
  );
};

export default Navigation;
