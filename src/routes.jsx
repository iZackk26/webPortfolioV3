import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Spotify from "./pages/Spotify";
import Bookdown from "./pages/Bookdown";
import Jieshop from "./pages/Jieshop";
import Ai from "./pages/Ai";
import NotFound from "./components/NotFound/NotFound";

const Routing = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/spotify" element={<Spotify />} />
            <Route path="/jieshop" element={<Jieshop />} />
            <Route path="/bookdown" element={<Bookdown />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default Routing;