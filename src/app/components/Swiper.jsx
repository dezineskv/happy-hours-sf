import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "../globals.css";

// import required modules
import { Scrollbar } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper mt-6 max-w-[75%] mx-auto"
      >
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1722168009723-ff75c2f1abdb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
            alt="swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1634003311194-152e30e732f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyZ2FyaXRhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
            alt="swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/991732782/photo/close-up-of-sommelier-serving-red-wine-at-fine-dining-restaurant.webp?a=1&b=1&s=612x612&w=0&k=20&c=tGFTa__aUn1A93g-4E9olsAhypFI2riQ3VvifUxNyzw="
            alt="swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/481119686/photo/espresso-expresso-coffee-martini-cocktail.webp?a=1&b=1&s=612x612&w=0&k=20&c=BZNIgcUSDN6OTK5PVWeHmbAfgVxcJY1RblLJHNAm9DE="
            alt="swiper"
            className="w-[250px] h-[167px] overflow-hidden"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1634003311194-152e30e732f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyZ2FyaXRhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
            alt="swiper"
          />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
