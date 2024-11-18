import { useState } from "react";

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
  {
    code: "fr",
    name: "Français",
    icon: "flags/fr.svg",
  },
];

// eslint-disable-next-line react/prop-types
export default function LanguageSwitcher({ languages = defaultLanguages, onLanguageChange = () => {} }) {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    onLanguageChange(language.code);
    setIsOpen(false); // Cierra el menú al seleccionar un idioma
  };

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
      {isOpen && ( // Solo muestra el menú si `isOpen` es true
        <div className="absolute right-0 mt-5 w-40 rounded-md bg-white shadow-lg dark:bg-gray-900">
          <ul className="py-1">
            {languages.map((language) => (
              <li
                key={language.code}
                className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  selectedLanguage.code === language.code
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
