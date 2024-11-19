import Header from '../components/header/Header';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer/Footer';
import { useTranslation } from "react-i18next"; // Importa el hook

export default function Contact() {
    const { isDarkMode } = useTheme();
    const { t } = useTranslation("contact");
    return (
        <>
          <Header />
          <div className={`transition-colors duration-500 pt-24 ease-in-out min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="flex flex-col md:flex-row p-6" data-aos="zoom-in" data-aos-duration="800">
              <div className="md:w-1/2 flex flex-col items-center p-4">
                <div className={`rounded-full h-32 w-32 flex items-center justify-center`}>
                  <svg className={`h-16 w-16 ${isDarkMode ? 'text-white' : 'text-black'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h2 className={`mt-4 text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {t("name")}
                </h2>
                <p className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {t("profession")}
                </p>
              </div>
              <div className="md:w-1/2 p-4">
                <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {t("contactTitle")}
                </h2>
                <div className="mt-4">
                  <p>
                    <span className="font-bold">{t("emailLabel")}:</span>{" "}
                    <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
                      izackk26@gmail.com
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">{t("institutionLabel")}:</span>{" "}
                    <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
                      {t("institution")}
                    </span>
                  </p>
                  <p>
                    <span className="font-bold">{t("countryLabel")}:</span>{" "}
                    <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
                      {t("country")}
                    </span>
                  </p>
                </div>
                <div className="pt-3">
                  <a
                    href="cv.pdf"
                    download
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#614385] to-[#516395] group-hover:from-[#614385] group-hover:to-[#516395] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[#614385]/50 dark:focus:ring-[#516395]/50 hover:shadow-lg hover:shadow-[#614385]/50 hover:shadow-[#516395]/50"
                  >
                    <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      {t("downloadCV")}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
      
}
