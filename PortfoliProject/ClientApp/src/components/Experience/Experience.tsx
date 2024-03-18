import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";



const Experience = () => {
  return (
    <div className='section pt-14'>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 h-64 flex items-center justify-center">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 h-64 flex items-center justify-center">
            Slide 4
          </div>
        </SwiperSlide>
      </Swiper>


      <div className='w-full flex flex-row justify-around'>
        <div className=''>
          Virtuarium
        </div>
        <div className=''>
          Zozidalom
        </div>
      </div>
      <div className='w-full flex flex-row justify-center'>
        <div className=''>
          Diákmunka AD SEO VIDEO GRAFIC WEB
        </div>
      </div>
    </div>
  )
}

export default Experience