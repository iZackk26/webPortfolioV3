import Header from '../components/header/Header';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer/Footer';
import { useTranslation } from "react-i18next";

import Marquee from "react-fast-marquee";
import { FaGitAlt, FaReact, FaNodeJs, FaJava, FaPython, FaRust } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import { BiLogoAws } from "react-icons/bi";
import { SiMysql, SiMongodb, SiPostgresql, SiTailwindcss, SiGo, SiR, SiCplusplus, SiC, SiLatex, SiGooglecloud } from "react-icons/si";

export default function Contact() {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation("contact");

  return (
    <main className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} p-8 py-14 transition-all duration-500`}>
      {/* Header */}
      <Header />

      {/* Contact Information */}
      <div className="flex flex-wrap justify-between items-center border-b-2 border-current pb-6 mb-6">
        <h1 className="text-4xl font-bold">Isaac Ramírez Rojas</h1>
      </div>

      {/* Work Experience */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold uppercase tracking-wider">Work Experience</h2>

        {/* Research Assistant in AI */}
        <div className="bg-opacity-10 border-l-4 border-current p-4 rounded-md mt-4">
          <div className="flex flex-wrap justify-between">
            <div>
              <p className="font-semibold">Research Assistant in AI</p>
              <p>Student Software Engineer</p>
            </div>
            <div>
              <p>San Carlos, Costa Rica</p>
              <p className="text-gray-400 text-sm">June 2023 – Feb 2025</p>
            </div>
          </div>
        </div>

        {/* Statistical Book Created with R */}
        <div className="bg-opacity-10 border-l-4 border-current p-4 rounded-md mt-4">
          <div className="flex flex-wrap justify-between">
            <div>
              <p className="font-semibold">Statistical Book Created with R</p>
              <p>Mathematics Instructor’s Personal Project</p>
            </div>
            <div>
              <p>San Carlos, Costa Rica</p>
              <p className="text-gray-400 text-sm">August 2022 – Jan 2023</p>
            </div>
          </div>
          <p className="mt-2 text-sm">
            Developed and compiled a <span className="font-semibold">comprehensive statistical book</span> using
            <span className="text-blue-400 font-medium"> R</span> for advanced data analysis and visualization.
            The project integrated <span className="text-blue-400 font-medium">LaTeX</span> for mathematical notation,
            <span className="text-blue-400 font-medium"> Markdown</span> for structured content formatting, and various
            <span className="text-blue-400 font-medium"> R libraries</span> to create detailed graphs and statistical insights.
            The book is publicly available at
            <a href="https://673bac25f933133396a0859b--eballestero.netlify.app/" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-1">
              this link
            </a>.
          </p>
        </div>

        {/* Research Assistant in Artificial Intelligence */}
        <div className="bg-opacity-10 border-l-4 border-current p-4 rounded-md mt-4">
          <div className="flex flex-wrap justify-between">
            <div>
              <p className="font-semibold">Research Assistant in Artificial Intelligence</p>
              <p>Student Software Engineer</p>
            </div>
            <div>
              <p>San Carlos, Costa Rica</p>
              <p className="text-gray-400 text-sm">June 2023 – Aug 2024</p>
            </div>
          </div>
          <p className="mt-2 text-sm">
            Developed a software solution for detecting real versus fake individuals using
            <span className="text-blue-400 font-medium"> Face Anti-Spoofing</span> techniques.
            Trained <span className="text-blue-400 font-medium">YOLO models</span> to recognize
            various types of spoofed images related to facial authentication and object detection.
            Implemented <span className="text-blue-400 font-medium">eye detection</span> algorithms
            to verify authenticity by analyzing <span className="font-semibold">eye blinks</span>.
            Additionally, conducted research on <span className="text-blue-400 font-medium">Vision Transformer</span>
            architectures for enhanced image recognition capabilities.
          </p>
          <p className="mt-2 text-sm">
            More details about the project can be found at
            <a href="https://github.com/iZackk26/IA-Projects" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:underline ml-1">
              this link
            </a>.
          </p>
        </div>

      </section>


      {/* Projects */}
      <section className="mb-10 p-4">
        <h2 className="text-xl font-semibold uppercase tracking-wider">Projects</h2>
        {[
          { title: "PuraCompra", desc: "Intermediary platform connecting users with online stores like Amazon, Best Buy, Walmart, etc." },
          { title: "Ticket Booking Server in Rust", desc: "High-performance server handling real-time ticket transactions." },
          { title: "Web Scraping Game Crawler", desc: "Compares video game prices across multiple platforms." },
          { title: "iFixIt", desc: "Automotive workshop management platform with scheduling, tracking, and analytics." },
          { title: "AI-Based Face Recognition System", desc: "AI-powered face recognition for enterprise employee identification and security." }
        ].map((project, index) => (
          <div key={index} className="bg-opacity-10 border-l-4 border-current p-4 rounded-md mt-4 hover:scale-105 transition">
            <p className="font-semibold">{project.title}</p>
            <p className="text-gray-400">{project.desc}</p>
          </div>
        ))}
      </section>

      {/* Extracurricular Activities */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold uppercase tracking-wider">Extracurricular Activities</h2>
        <div className="bg-opacity-10 border-l-4 border-current p-4 rounded-md mt-4">
          <p><b>Robotics:</b> Designed and programmed robotic systems.</p>
          <p><b>Computer Building & Repair:</b> Assembled and repaired PCs.</p>
        </div>
      </section>


      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold uppercase tracking-wider">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Languages */}
          <div className="bg-opacity-10 border-l-4 border-current p-4 rounded-md">
            <h3 className="text-lg">Languages</h3>
            <Marquee gradient={false} speed={40} pauseOnHover loop={0} className="mt-2">
              <FaPython className="text-yellow-400 w-6 h-6 mx-3" />
              <FaJava className="text-red-600 w-6 h-6 mx-3" />
              <SiGo className="text-blue-500 w-6 h-6 mx-3" />
              <SiR className="text-blue-400 w-6 h-6 mx-3" />
              <SiCplusplus className="text-blue-600 w-6 h-6 mx-3" />
              <SiC className="text-gray-300 w-6 h-6 mx-3" />
              <FaRust className="text-orange-500 w-6 h-6 mx-3" />
              <SiLatex className="text-green-500 w-6 h-6 mx-3" />
            </Marquee>
          </div>

          {/* Technologies */}
          <div className="bg-opacity-10 border-l-4 border-current p-4 rounded-md">
            <h3 className="text-lg">Technologies</h3>
            <Marquee gradient={false} speed={40} pauseOnHover loop={0} className="mt-2">
              <FaGitAlt className="text-orange-500 w-6 h-6 mx-2" />
              <FaReact className="text-blue-500 w-6 h-6 mx-2" />
              <FaNodeJs className="text-green-500 w-6 h-6 mx-2" />
              <SiTailwindcss className="text-blue-400 w-6 h-6 mx-2" />
              <SiMysql className="text-blue-600 w-6 h-6 mx-2" />
              <SiMongodb className="text-green-600 w-6 h-6 mx-2" />
              <SiPostgresql className="text-blue-500 w-6 h-6 mx-2" />
              <BiLogoAws className="text-yellow-500 w-6 h-6 mx-2" />
              <TbBrandAzure className="text-blue-500 w-6 h-6 mx-2" />
              <SiGooglecloud className="text-red-500 w-6 h-6 mx-2" />
            </Marquee>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold uppercase tracking-wider">References</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Ph. D. Abel Méndez Porras */}
          <div className="bg-opacity-10 border-l-4 border-current p-4 rounded-md">
            <p className="font-semibold">Ph. D. Abel Méndez Porras</p>
            <p className="italic">Data Processing, Image Processing, Artificial Intelligence, Instituto Tecnológico</p>
            <a href="mailto:amendez@tec.ac.cr" className="underline hover:opacity-80">amendez@tec.ac.cr</a>
          </div>

          {/* Jorge Alfaro Velasco */}
          <div className="bg-opacity-10 border-l-4 border-current p-4 rounded-md">
            <p className="font-semibold">Jorge Alfaro Velasco</p>
            <p className="italic">Professor at Instituto Tecnológico de Costa Rica</p>
            <a href="mailto:joalfaro@tec.ac.cr" className="underline hover:opacity-80">joalfaro@tec.ac.cr</a>
          </div>

          {/* New Third Reference */}
          <div className="bg-opacity-10 border-l-4 border-current p-4 rounded-md">
            <p className="font-semibold">Esteban Ballestero Alfaro</p>
            <p className="italic">School of Natural and Exact Sciences</p>
            <a href="mailto:eballestero@tec.ac.cr" className="underline hover:opacity-80">eballestero@tec.ac.cr</a>
          </div>

          {/* Empty Space - Keeps the grid structure balanced */}
          <div></div>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </main>
  );
}
