import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Card from './Card';
import { useTheme } from '../../context/ThemeContext';

const cardData = [
  {
    image: 'project/jieshopDark.jpg',
    title: 'JieShop',
    description: 'Intermediary between the customer and the store, that allows the customer to buy products from different stores in USA',
    navigateTo: 'jieshop',
    tags: ['React', 'Node.js', 'Express'],
  },
  {
    image: 'project/book.webp',
    title: 'Bookdown Book',
    description: 'Project made on R, a book about the use of R in the field of data science and statistics.',
    navigateTo: 'bookdown',
    tags: ['R', 'Data Science', 'Statistics'],
  },
  {
    image: 'project/Humanoide.webp',
    title: 'Artificial Intelligence',
    description: 'Project made on Python, using OpenCV and TensorFlow to detect and recognize objects in real time.',
    navigateTo: 'ai',
    tags: ['Python', 'OpenCV', 'TensorFlow'],
  },
  {
    image: 'project/dots.webp',
    title: 'More Soon!',
    description: 'I will update this project section soon with more of my projects. Stay tuned for updates!',
    navigateTo: '',
    tags: [],
  },
];


export default function CarrouselCard() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-black' : 'bg-white'} py-10`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={4} // Ajusta este número para mostrar más cartas por página
          navigation
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            412: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            420: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            912: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
          }}
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log('slide change')}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className="flex">
              <Card image={card.image} title={card.title} description={card.description} navigateTo={card.navigateTo} tags={card.tags} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}