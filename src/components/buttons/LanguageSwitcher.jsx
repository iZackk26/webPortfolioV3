import { useState } from "react";
import { useTranslation } from "react-i18next";

const defaultLanguages = [
  {
    code: "en",
    name: "English",
    icon: "flags/en.svg",
  },
  {
    code: "es",
    name: "Español",
    icon: "flags/es.svg",
  },
];

// eslint-disable-next-line react/prop-types
export default function LanguageSwitcher({ languages = defaultLanguages }) {
  const { i18n } = useTranslation(); // Acceso a i18next
  const currentLanguage = i18n.language; // Idioma actual de i18next
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language.code); // Cambiar idioma con i18next
    setIsOpen(false); // Cierra el menú al seleccionar un idioma
  };

  const selectedLanguage = languages.find((lang) => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <button
        className="flex items-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
        aria-label="Switch language"
        onClick={() => setIsOpen(!isOpen)} // Cambia la visibilidad del menú
      >
        <span className="">
          <img src={selectedLanguage.icon} alt={selectedLanguage.name} className="h-4 w-4" />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-5 w-40 rounded-md bg-white shadow-lg dark:bg-gray-900">
          <ul className="py-1">
            {languages.map((language) => (
              <li
                key={language.code}
                className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  currentLanguage === language.code
                    ? "bg-gray-200 dark:bg-gray-700"
                    : ""
                }`}
                onClick={() => handleLanguageChange(language)}
              >
                <span className="mr-2">
                  <img src={language.icon} alt={language.name} className="h-4 w-4" />
                </span>
                {language.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
