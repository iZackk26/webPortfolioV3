import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from '../../context/ThemeContext';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isRotated, setIsRotated] = useState(false);

  const handleToggleTheme = () => {
    setIsRotated(!isRotated);
    toggleTheme();
  };
  return (
    <nav className="flex items-center gap-4">
      <Link to="/projects" className="text-sm hover:underline md:text-lg text-gray-900 dark:text-gray-100">
        Projects
      </Link>
      <Link to="/about" className="text-sm hover:underline md:text-lg text-gray-900 dark:text-gray-100">
        About
      </Link>
      <Link to="/contact" className="text-sm hover:underline md:text-lg text-gray-900 dark:text-gray-100">
        Contact
      </Link>
      <button
        aria-label="Toggle dark mode"
        className={`text-gray-400 hover:text-gray-300 dark:text-gray-600 dark:hover:text-gray-500 transition-transform duration-500 ${isRotated ? 'rotate-180' : ''}`}
        onClick={handleToggleTheme}
      >
        <CgDarkMode />
      </button>
    </nav>
  );
};

export default Navigation;
