"use client"

import { useTheme } from "../../context/ThemeContext"

const accessories = [
  {
    name: "BenQ Screenbar Halo",
    category: "Monitor Light",
    description: "Dimmable LED monitor light bar with wireless controller.",
    image: "setup/screenbar-halo.jpg",
  },
  {
    name: "Glorious GMMK Keyboard",
    category: "Keyboard",
    description: "Modular mechanical keyboard with hot-swappable switches.",
    image: "setup/gmmk-keyboard.jpg",
  },
  {
    name: "Corsair K65 Keyboard",
    category: "Keyboard",
    description: "Compact mechanical gaming keyboard with per-key RGB lighting.",
    image: "setup/k65.webp",
  },
  {
    name: "Sonos Era 100",
    category: "Speaker",
    description: "Smart speaker with immersive sound and voice assistant support.",
    image: "setup/era100.jpg",
  },
  {
    name: "Samsung Odyssey G4 240Hz 27” IPS",
    category: "Monitor",
    description: "Gaming monitor with 240Hz refresh rate and Full HD resolution.",
    image: "setup/G4.webp",
  },
  {
    name: "NZXT Capsule Mic",
    category: "Microphone",
    description: "High-quality cardioid USB microphone for streaming and gaming.",
    image: "setup/capsule-nzxt.png",
  },
  {
    name: "Apple Earbuds",
    category: "Audio",
    description: "Lightweight earbuds, great for voice calls and media playback.",
    image: "setup/earbuds.jpeg",
  },
  {
    name: "Xbox One Blue Camouflage Controller",
    category: "Controller",
    description: "Wireless Xbox controller with textured grip and ergonomic design.",
    image: "setup/xbox-camu.jpg",
  },
  {
    name: "GoPro Hero 10",
    category: "Camera",
    description: "Action camera with 5.3K video recording and HyperSmooth stabilization.",
    image: "setup/go-pro.jpg",
  },
]

export default function Accessories() {
  const { isDarkMode } = useTheme()

  return (
    <section className="mt-12" data-aos="fade-up">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Accessories & Gadgets</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          The tools that complete my setup and enhance my productivity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessories.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-105 ${isDarkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"
              }`}
            data-aos="zoom-in"
          >
            <div className="relative w-full h-48 bg-gray-100 dark:bg-black">

              <img src={item.image} alt={item.name} className="object-cover w-full h-full" />

            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${isDarkMode ? "bg-black text-gray-300" : "bg-gray-200 text-gray-700"
                  }`}
              >
                {item.category}
              </span>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
