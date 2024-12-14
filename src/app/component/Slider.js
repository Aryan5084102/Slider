"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { slides } from '../data/data';

const Slider = () => {
  const initialNumbers = "1439380".split("");
  const [currentNumbers, setCurrentNumbers] = useState(initialNumbers)

  useEffect(()=>{
    const updateNumbers = () =>{
      const newNumbers = currentNumbers.map((num) =>{
        const increment = Math.floor(Math.random() * 3)
        return (parseInt(num) + increment) % 10
      })
      setCurrentNumbers(newNumbers)
    }
    const interval = setInterval(updateNumbers, 3000)
    return () => clearInterval(interval)

  }, [currentNumbers]);


    return (
    <div className="w-full min-h-screen">
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={4000}
      spaceBetween={50}
      slidesPerView={1}
      className="h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col md:flex-row justify-center items-center h-screen">
            <div className="w-full md:w-1/2 px-4 md:px-8">
              <div className="flex relative items-center mb-6">
                <div className="flex space-x-2">
                  {currentNumbers.map((num, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center w-7 h-8 bg-white rounded-lg shadow-2xl text-sm md:text-lg font-bold text-[#0c2d50]"
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <div className="absolute flex items-center bottom-7 left-[230px] bg-red-500 text-white px-1 py-0.5 rounded-md md:bottom-7 md:left-[235px]">
                  <LuDot className="text-sm md:text-lg" />
                  <p className="text-xs md:text-sm">LIVE</p>
                </div>
                <div className="ml-4 text-[#0c2d50] font-extrabold text-sm md:text-base">
                  STUDENTS COUNSELLED
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full sm:w-[500px] items-center justify-between shadow-lg mb-6 bg-white rounded-3xl px-4 py-2">
                <input
                  type="text"
                  placeholder="Search for colleges and courses"
                  className="outline-none border-none p-2 w-full sm:w-auto"
                />
                <div className="mt-2 sm:mt-0 w-10 h-10 rounded-full flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
                  <IoSearch className="text-xl sm:text-2xl" />
                </div>
              </div>
              <p className="text-lg sm:text-2xl mb-1 text-center md:text-left">
                {slide.heading}
              </p>
              <h1 className="text-3xl sm:text-5xl font-black mb-8 text-[#0c2d50] text-center md:text-left">
                {slide.subheading}
              </h1>
              <div className="bg-white inline-block mb-8 mx-auto md:mx-0">
                <Image
                  src="https://www.learningroutes.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fposter1.44f1b3a4.webp&w=750&q=75"
                  width={200}
                  height={50}
                  className="bg-transparent z-50"
                  alt="Error"
                />
              </div>
              <div className="flex gap-2 justify-center md:justify-start">
                <p className="uppercase text-sm sm:text-base font-medium text-[#0c2d50]">
                  Made in with India
                </p>
                <FaHeart className="text-base sm:text-lg text-red-500" />
              </div>
            </div>
            <div className="w-full md:w-auto flex justify-center items-center">
              <Image
                src={slide.imageUrl}
                width={400}
                height={250}
                className="rounded-lg"
                alt="Error"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="absolute top-64 -right-14 cursor-pointer z-10 -rotate-90 bg-[#e89e26] w-32 sm:w-40 py-1 sm:py-2 justify-center items-center rounded-lg flex gap-1">
      <GoQuestion className="text-sm sm:text-lg lg:text-xl font-semibold" />
      <div className="text-xs sm:text-sm lg:text-lg font-semibold">Enquiry Now</div>
    </div>
  </div>


    )
}

export default Slider
