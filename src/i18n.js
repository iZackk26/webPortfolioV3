import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Cargar traducciones desde archivos
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta a los archivos de traducción
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de reserva
    ns: ['common'], // Namespaces iniciales
    defaultNS: 'common', // Namespace por defecto
    interpolation: {
      escapeValue: false, // React ya escapa los valores automáticamente
    },
  });

export default i18n;
