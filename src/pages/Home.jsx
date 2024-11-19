import Header from '../components/header/Header';
import { useTheme } from '../context/ThemeContext';
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from 'react-icons';
import CarrouselCard from '../components/projects/CarrouselCard';
import Footer from '../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { isDarkMode } = useTheme(); // Get the current theme state
  const { t } = useTranslation('home'); // Especificar el namespace 'home'

  return (
    <>
      <Header />
      <IconContext.Provider value={{ color: isDarkMode ? 'white' : 'black' }}>
        <div className={`transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black' : 'bg-white'} py-24 min-h-screen px-4 sm:px-6 lg:px-8`}>
          <div className="flex items-center gap-x-2 pb-5" data-aos="fade-right" data-aos-duration="1000">
            <h1 className={`transition-colors duration-500 ease-in-out text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {t('title')}
            </h1>
            <span className={`ml-2 bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 mt-3 rounded ${isDarkMode ? 'dark:bg-purple-900 dark:text-purple-300' : ''}`}>
              {t('subtitle')}
            </span>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className={`transition-colors duration-500 ease-in-out text-2xl opacity-50 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span>{t('description')}</span>
            </h2>
          </div>

          <div className="flex flex-row space-x-4 mt-5" id="social" data-aos="fade-right" data-aos-duration="1000">
            <a
              href="https://www.instagram.com/izackk_r/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              aria-label={t('socialLinks.instagram')}
            >
              <GrInstagram className="relative z-10 rounded-sm group-hover:text-pink-400 transition-all duration-500 group-hover:shadow-instagram" />
            </a>
            <a
              href="https://github.com/iZackk26"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              aria-label={t('socialLinks.github')}
            >
              <FaGithub className="relative z-10 rounded-lg group-hover:text-gray-600 transition-all duration-500 group-hover:shadow-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/isaac-ram%C3%ADrez-426b962ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              aria-label={t('socialLinks.linkedin')}
            >
              <FaLinkedin className="relative z-10 rounded-lg group-hover:text-blue-400 transition-all duration-500 group-hover:shadow-linkedin" />
            </a>
          </div>
          {/* Current Projects Section */}
          <div className="pt-10">
            <h2 className={`transition-colors duration-500 ease-in-out text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {t('projects.title')}
            </h2>
            <CarrouselCard />
          </div>
        </div>
      </IconContext.Provider>
      <Footer />
    </>
  );
}
