import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import JieshopCarrousel from '../components/projects/JieshopCarrousel';
import { useTheme } from '../context/ThemeContext';


export default function Jieshop() {
  const { isDarkMode } = useTheme(); // Get the current theme state

  const products = [
    {
      ProductsID: 1,
      name: "Apple Vision Pro",
      description: "Descripción del producto 1",
      img: "jieshop/appleVision.png" // Asegúrate de tener una URL válida
    },
    {
      ProductsID: 2,
      name: "MacBook M3 Pro",
      description: "Descripción del producto 2",
      img: "jieshop/macM3Pro.png" // Asegúrate de tener una URL válida
    },
    {
      ProductsID: 3,
      name: "Yeezy Slides",
      description: "Descripción del producto 1",
      img: "jieshop/bone.png" // Asegúrate de tener una URL válida
    },
    {
      ProductsID: 4,
      name: "Wahl Professional",
      description: "Descripción del producto 1",
      img: "jieshop/dryer.png" // Asegúrate de tener una URL válida
    },
    {
      ProductsID: 5,
      name: "Essentials",
      description: "Descripción del producto 1",
      img: "jieshop/essentials.png" // Asegúrate de tener una URL válida
    },
    // Añade más productos según sea necesario
  ];

  return (
    <>
      <Header />
      {/* JieShop First Section */}
      <div className={`flex flex-col min-h-screen transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="flex flex-grow" data-aos="fade-right" data-aos-duration="1200">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 py-8">
            <div className="text-center">
              <p className="text-2xl md:text-2xl lg:text-5xl font-bold">JieShop</p>
              <p className="text-lg md:text-4xl">The simpliest way to get your things</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={isDarkMode ? "project/jieshopLight.png" : "project/jieshopDark.jpg"}
              alt="Imagen decorativa"
              className="w-full max-w-full h-auto object-contain md:object-cover"
            />
          </div>
        </div>
        {/* JieShop Content */}
        <div className='p-10'>
          <h1 className="text-gray-900 dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-3 pt-6">
            ¿What is JieShop?
          </h1>
          <p className="text-sm sm:text-l md:text-xl lg:text-2xl">
            JieShop is an intermediary between the customer and the store that allows you to buy products from different stores in the US and import them directly to Costa Rica.
          </p>
        </div>
        {/* JieShop Carrousel */}
        <div className='mx-4 md:mx-8 lg:mx-16'>
          <JieshopCarrousel products={products} />
        </div>
        {/* JieShop Explanation */}
        <div className='p-10'>
          <p className='pt-10 text-sm sm:text-l md:text-xl lg:text-2xl'>
            Products like those shown above are examples of what you can buy through JieShop with low shipping costs and the guarantee of receiving your products in the best conditions.
          </p>
          <p className='pt-5 text-sm'>
            This project is still in development and will be available soon.
          </p>
          <div class="flex space-x-4 pt-3">
            <img class="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/128321469?v=4" alt="Rounded avatar"></img>
            <img class="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/101372687?v=4" alt="Rounded avatar"></img>
          </div>
          </div>
        </div>
        <Footer />
      </>
      );
}
