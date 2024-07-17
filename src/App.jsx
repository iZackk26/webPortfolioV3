import Routing from "./routes"
import { ThemeProvider } from "./context/ThemeContext"
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();
function App() {

  return (
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
  )
}

export default App
