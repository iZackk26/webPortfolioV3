import { useState } from "react"
import { Tab } from "@headlessui/react"
import { useTheme } from "../context/ThemeContext"
import Header from "../components/header/Header" // 👈 Importamos el Header
import Accessories from "../components/accesories/Accesories"

export default function SetupShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const { isDarkMode } = useTheme() // 👈 Se mantiene el DarkMode desde el contexto

  const pcSpecs = [
    { label: "CPU", value: "Intel i7-14700K" },
    { label: "GPU", value: "Integrated" },
    { label: "RAM", value: "Corsair Dominator Titanium DDR5 6200Mhz" },
    { label: "Storage", value: "3TB NVMe SSD" },
    { label: "Motherboard", value: "ROG STRIX B760-A GAMING WIFI" },
    { label: "Cooling", value: "Corsair iCUE H150i Elite LCD XT" },
    { label: "Case", value: "Lian LI 011 EVO RGB (White)" },
    { label: "PSU", value: "ROG Strix 1000W Gold Aura Edition" },
  ]

  const laptopSpecs = [
    { label: "Model", value: "MacBook Pro 14-inch" },
    { label: "CPU", value: "Apple M3 Pro" },
    { label: "RAM", value: "18GB Unified Memory" },
    { label: "Storage", value: "512GB SSD" },
    { label: "Display", value: "16-inch Liquid Retina XDR" },
    { label: "OS", value: "macOS Sequoia" },
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-black text-gray-100" : "bg-gray-50 text-black"}`}>
      <Header /> {/* 👈 Se coloca el Header aquí */}

      <div className="container mx-auto px-4 py-24"> {/* 👈 Se ajusta el padding-top para evitar que el Header cubra contenido */}
        <header className="mb-12 text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">My Setup</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my current tech setup, including my custom PC build, laptop, and all the accessories that help me stay productive.
          </p>
        </header>

        {/* Tabs Section */}
        <section className="mb-24">
          <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
            {/* Tab List */}
            <Tab.List className="flex justify-center space-x-4 mb-6" data-aos="fade-up">
              {["Laptop", "Desktop PC"].map((tab, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `px-4 py-2 text-lg font-medium border-b-2 transition-all ${
                      selected ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500 hover:text-gray-700"
                    }`
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>

            {/* Tab Panels */}
            <Tab.Panels>
              {/* Laptop Panel */}
              <Tab.Panel className="p-4" data-aos="fade-up">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                    <img
                      src="setup/macbook.png"
                      alt="My Laptop Setup"
                      className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                      data-aos="zoom-in"
                    />
                  </div>
                  <div data-aos="fade-left">
                    <h2 className="text-3xl font-bold mb-6">My Laptop</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      This is my daily driver for on-the-go work and creative tasks.
                    </p>
                    <ul>
                      {laptopSpecs.map((spec, index) => (
                        <li key={index} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-800">
                          <span className="font-medium">{spec.label}</span>
                          <span className="text-gray-600 dark:text-gray-400">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tab.Panel>

              {/* PC Panel */}
              <Tab.Panel className="p-4" data-aos="fade-up">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
                    <img
                      src="setup/pc.jpeg"
                      alt="My PC Setup"
                      className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                      data-aos="zoom-in"
                    />
                  </div>
                  <div data-aos="fade-right">
                    <h2 className="text-3xl font-bold mb-6">My Custom PC</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Built for gaming and content creation, this PC handles everything I throw at it with ease.
                    </p>
                    <ul>
                      {pcSpecs.map((spec, index) => (
                        <li key={index} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-800">
                          <span className="font-medium">{spec.label}</span>
                          <span className="text-gray-600 dark:text-gray-400">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </div>
      <Accessories /> {/* 👈 Se coloca el componente Accessories aquí */}
    </div>
  )
}
