import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import user from '../assets/testimonals/user.png'
import right from '../assets/testimonals/left.svg'

import left from '../assets/testimonals/right.svg'
import quote from '../assets/testimonals/quote.svg'


import PageTitle from '../shared/PageTitle';
import TestimonyCard from '../components/TestimonyCard';

import testimonialsList from '../data/testimonialsList';

function Testimonals() {



    const swiperRef = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
        console.log(swiper.isBeginning)
    };




    return (
        <div className='my-16 '>
            <PageTitle pageTitle={'What they say'} />
            <Swiper
                // ref={swiperRef}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                // navigation
                modules={[Navigation]}
                className='mySwiper'
                onSlideChange={handleSlideChange}
                slidesPerView={1}

            >
                {testimonialsList.length > 0 && testimonialsList.map((testim) => (
                    <SwiperSlide key={testim.id}>
                        <TestimonyCard testim={testim}  />
                    </SwiperSlide>
                ))}

            </Swiper>

            <div className='flex gap-4 mx-auto  w-max mt-8'>
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className={` ${isBeginning ? 'bg-gray' : 'bg-white'}  h-10 w-10  rounded-[100px] shadow-[4px_16px_32px_0px_rgba(238,238,238,0.16)] 
                place-content-center text-center cursor-pointer  `}>
                    <img src={right} alt="left" className='my-auto mx-auto ' />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className={` ${isEnd ? 'bg-gray' : 'bg-white'}  h-10 w-10  rounded-[100px] shadow-[4px_16px_32px_0px_rgba(238,238,238,0.16)] 
                place-content-center text-center cursor-pointer  `}>
                    <img src={left} alt="left" className='my-auto mx-auto ' />
                </button>

            </div>


        </div>
    )
}

export default Testimonals