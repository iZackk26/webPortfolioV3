import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function JieshopCarrousel({ products }) {
  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {products.map(product => (
        <SwiperSlide key={product.ProductsID}>
          <div className="p-4 rounded shadow mb-4 cursor-pointer">
            <div className="w-full h-48 mb-4 overflow-hidden flex justify-center items-center">
              <img 
                src={product.img} 
                alt={product.name} 
                className="object-contain max-h-full"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg mb-2">{product.description}</p>
          </div>
        </SwiperSlide>
      ))}

      {/* Personalización de las flechas */}
      <div className="swiper-button-next !w-4 !h-4 !text-black !opacity-80 hover:!opacity-100"></div>
      <div className="swiper-button-prev !w-4 !h-4 !text-black !opacity-80 hover:!opacity-100"></div>
    </Swiper>
  );
}
