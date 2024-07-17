import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

import { useTheme } from '../context/ThemeContext';
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import ProjectItem from '../components/projects/ProjectItem';

import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    id: 1,
    title: "My Neovim Configs",
    description: "My personal Neovim configurations for web development, Python, and more. Includes plugins, key mappings, and custom settings.",
    image: "project/nvim.png",
    tags: ["Neovim", "Configs", "Lazy", "Plugin Manager"],
    linkTo: "https://github.com/iZackk26/neovim-configs"
  },
  {
    id: 2,
    title: "PyHandler",
    description: "This project revolves around the seamless uploading and downloading of files to and from cloud storage. The aim is to provide an efficient solution that complements the Assembly project's file management requirements.",
    image: "project/handler.png", 
    tags: ["Python", "File Management", "Firebase", "Cloud Storage"],
    linkTo: "https://github.com/iZackk26/PyHandlerPriv"
  },
  {
    id: 3,
    title: "Restaurant Handler",
    description: "This project is a java application that allows users to view and order food from a restaurant, the application uses sockets to communicate with the server and the server, it has a user interface and an admin interface. The admin interface allows the restaurant owner to add, remove, and update the menu items, while the user interface allows the user to view the menu, order food, and view the order history. ",
    image: "project/restaurantHandler.png",
    tags: ["Java", "Sockets", "UI", "Admin Interface"],
    linkTo: "https://github.com/iZackk26/Restaurant-Handler"
  },
  {
    id: 4,
    title: "Enterprise Manager",
    description: "is an inventory management system designed to handle products using various data structures: singly linked lists, circular linked lists, doubly linked lists, and doubly circular linked lists. This system allows for CRUD operations (Create, Read, Update, Delete) on products, ensuring efficient and flexible inventory management.",
    image: "project/enterpriseManager.jpg",
    tags: ["Inventory Management", "Data Structures", "CRUD"],
    linkTo: "https://github.com/akhoz/Enterprise-Management-Handler"

  },
  {
    id: 5,
    title: "Video Games Web Scraper",
    description: "Is a comprehensive tool that streamlines the search and comparison of video game prices across multiple online platforms like G2A, INSTANT GAMING, and PS4 STORE. It enhances the shopping experience by providing up-to-date information on the best deals.",
    image: "project/scrapper.png",
    tags: ["Web Scraping", "G2A-IG-PS4", "Flask", "Python"],
    linkTo: "https://github.com/akhoz/Web-Scraping-Game-Crawler"
  },
  {
    id: 6,
    title: "Pura Compra",
    description: "PuraCompra is an intermediary platform connecting users with online stores like Amazon, Best Buy, Micro Center, Walmart, and Gymshark. It offers menus for administrators and users, order tracking, and various features for an integrated shopping experience.",
    image: "project/puraCompra.jpg",
    tags: ["SQL", "NodeJS", "Sequlize", "React", "TailwindCSS"],
    linkTo: "https://github.com/iZackk26/PuraCompra"
  },

];

const ITEMS_PER_PAGE = 5;

const categories = ["Neovim", "Python", "Java", "Web Scraping", "SQL"];

const recentPosts = [
  { title: 'Pura Compra Web App', imageUrl: 'project/puraCompra.jpg', linkTo: 'https://github.com/iZackk26/PuraCompra' },
  { title: 'Web Portfolio', imageUrl: 'project/portfolio.jpg', linkTo: 'https://github.com/iZackk26' },
  { title: 'Catering Service V2', imageUrl: 'project/catering.jpg', linkTo: 'https://github.com/iZackk26/Catering-ServiceV2' }
];

const tags = ["Neovim", "Python", "Java", "Web Scraping", "SQL", "Flask", "NodeJS", "React", "TailwindCSS"];

export default function Projects() {
  const { isDarkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [currentPage]);

  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    setCurrentPage(1); // Reset to first page on tag selection
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ease-in-ou ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Header />
      <main className={`container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-8 transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`} >
        <div key={currentPage} className="space-y-8">
          {currentProjects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
        <div className="px-6 space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <a key={category} className="text-sm font-medium hover:underline underline-offset-4">
                  {category}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Recent Posts</h3>
            <div className="space-y-2">
              {recentPosts.map((post) => (
                <Link key={post.title} to={post.linkTo} className="flex items-center space-x-2 text-sm font-medium hover:underline underline-offset-4">
                  <img
                    src={post.imageUrl}
                    width={50}
                    height={50}
                    alt="Recent Post Image"
                    className="rounded-lg object-cover"
                  />
                  <span>{post.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 ${selectedTag === tag ? 'bg-indigo-200 dark:bg-indigo-700' : ''}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-center space-x-4 py-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`transition-colors duration-500 ease-in-out  disabled:opacity-50`}
        >
          <IoIosArrowDropleftCircle size={24} />
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`transition-colors duration-500 ease-in-out disabled:opacity-50`}
        >
          <IoIosArrowDroprightCircle size={24} />
        </button>
      </div>
      <Footer />
    </div>
  );
}
