import React from 'react'
import Header from '../components/header/Header';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer/Footer';
import { useTranslation } from "react-i18next"; // Importa el hook

// Import icons
import { IconContext } from 'react-icons';
import { DiJava, DiJsBadge, DiPython, DiRubyRough, DiRust } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { SiLatex } from "react-icons/si";

export default function About() {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation("about");

  return (
    <>
      <Header />
      <div className={`transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black' : 'bg-white'} py-20 sm:py-24 lg:py-40 min-h-screen`}>
        <div className="container mx-auto px-12 sm:px-12 lg:px-20" data-aos="zoom-in" data-aos-duration="800">
          <h1 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold pb-3 pt-2">
            {t("skillsTitle")}
          </h1>
          <IconContext.Provider value={{ color: isDarkMode ? 'white' : 'black' }}>
            <div className="flex flex-wrap gap-5 justify-center">
              <a href="https://go.dev/" target="_blank" rel="noopener noreferrer">
                <FaGolang size={33} />
              </a>
              <a href="https://github.com/iZackk26/Restaurant-Handler" target="_blank" rel="noopener noreferrer">
                <DiJava size={33} />
              </a>
              <a href="https://github.com/iZackk26/ClimTemp" target="_blank" rel="noopener noreferrer">
                <DiJsBadge size={33} />
              </a>
              <a href="https://github.com/akhoz/Web-Scraping-Game-Crawler" target="_blank" rel="noopener noreferrer">
                <DiPython size={33} />
              </a>
              <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer">
                <DiRubyRough size={33} />
              </a>
              <a href="https://github.com/iZackk26/Quantum_Computer" target="_blank" rel="noopener noreferrer">
                <SiLatex size={33} />
              </a>
              <a href="https://github.com/iZackk26/Tickets-Manager" target="_blank" rel="noopener noreferrer">
                <DiRust size={33} />
              </a>
              <a href="https://github.com/iZackk26/PuraCompra" target="_blank" rel="noopener noreferrer">
                <GrMysql size={33} />
              </a>
            </div>
          </IconContext.Provider>
  
          <h1 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold pb-3 pt-6">
            {t("whyTitle")}
          </h1>
          <h2 className="text-gray-900 dark:text-gray-300 text-base sm:text-lg mt-1">
            {t("whyDescription")}
          </h2>
  
          <h1 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold pb-3 pt-6">
            {t("interestsTitle")}
          </h1>
          <h2 className="text-gray-900 dark:text-gray-300 text-base sm:text-lg mt-1">
            {t("interestsDescription")}
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
  
}
