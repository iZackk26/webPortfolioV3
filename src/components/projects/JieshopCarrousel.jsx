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
      navigation
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
                src={product.img} // Utiliza product.img
                alt={product.name} // Asegúrate de tener un alt descriptivo
                className="object-contain max-h-full"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg mb-2">{product.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}