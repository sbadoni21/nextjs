"use client"

import React from 'react';
import { sections } from "../contents/index.js";
import { swiperimages } from '../contents/index.js';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from 'swiper/core'; // Import only Pagination from core
import { Autoplay, Navigation } from 'swiper'; // Import Autoplay and Navigation separately

SwiperCore.use([Pagination, Autoplay, Navigation]);
const Hero = () => {
  return (
    <div className='h-fit pl-32 pr-32'>
      <div className='flex flex-row pt-2 gap-20 justify-between'>
        <div className='border-r-2  '>
          {sections.map((section, index) => {
            return (
              <h1 className='text-black capitalize pb-4 pr-12 ' key={index}>
                {section}
              </h1>
            );
          })}
        </div>
        {/* <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            
            pagination={true}
            navigation={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper p-4"
          >
            
              {swiperimages.map((swiperimage, index) => (
                <SwiperSlide key={index}>
                   
                  <img
                    src={swiperimage.src} // Use src property to access image URL
                    alt={`Slide ${index}`}
                    className='h-96 w-96'
                  />
               
                </SwiperSlide>
              ))}
        
           
          </Swiper>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;

