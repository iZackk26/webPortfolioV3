import React from 'react'
import Header from '../components/header/Header';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer/Footer';

// Import icons
import { IconContext } from 'react-icons';
import { DiJava, DiJsBadge, DiPython, DiRubyRough, DiRust } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { SiLatex } from "react-icons/si";

export default function About() {
    const { isDarkMode } = useTheme();

    return (
      <>
        <Header />
        <div className={`transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black' : 'bg-white'} py-20 sm:py-24 lg:py-40 min-h-screen`}>
          <div className="container mx-auto px-12 sm:px-12 lg:px-20" data-aos="zoom-in" data-aos-duration="800">
            <h1 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold pb-3 pt-2">
              Skills
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
              ¿Why am I studying Computer Engineering?
            </h1>
            <h2 className="text-gray-900 dark:text-gray-300 text-base sm:text-lg mt-1">
              I have been researching technology since I was a kid. I love how technology can significantly improve our future, from the smallest changes to the biggest ones. My journey began when I played video games as a kid. I didn't study Computer Science to become a game developer; instead, I was fascinated by how developers create software and hardware to solve complex problems. That's why I'm specializing in my career. This fascination led me to start programming when I was 17 years old. As a younger person, I didn't research much because I didn't think it was important. However, I've come to realize that knowledge is power. That's why I now enjoy investigating things I am passionate about and solutions that can make my life easier and help solve complex problems.
            </h2>
  
            <h1 className="text-gray-900 dark:text-white text-xl sm:text-2xl font-bold pb-3 pt-6">
              My interests
            </h1>
            <h2 className="text-gray-900 dark:text-gray-300 text-base sm:text-lg mt-1">
              Nowadays, I'm investigating AI, machine learning, deep learning, web development, and UI. Additionally, I've started using Arch Linux as my operating system. I've tried several distributions like Ubuntu, but I really appreciate the level of customization that Arch Linux offers. I've also been improving my English pronunciation through English classes, and I've become accustomed to watching and listening to various content in English. I enjoy building computers, and in the future, I would like to create my own custom mechanical keyboard. Lastly, I've been refining my music preferences because I believe music can bring us energy and happiness.
            </h2>
          </div>
        </div>
        <Footer />
      </>
    );
}
