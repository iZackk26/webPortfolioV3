import Routing from "./routes"
import { ThemeProvider } from "./context/ThemeContext"
import AOS from 'aos';
import 'aos/dist/aos.css'
import i18n from './i18n.js'
import { I18nextProvider } from 'react-i18next'; // Proveedor de i18next
import { Suspense } from "react";
import LoadingSpinner from "./components/spinners/LoadingSpinner.jsx";

AOS.init();
function App() {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <Routing />
        </ThemeProvider>
      </I18nextProvider>
    </Suspense>
  )
}

export default App
