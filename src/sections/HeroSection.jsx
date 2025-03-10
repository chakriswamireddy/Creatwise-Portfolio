import React from 'react'
import Rectangle from '../assets/home/Rectangle.svg'
import Rectangle2 from '../assets/home/Rectangle2.svg'


import simla from '../assets/home/simla.svg'
import doredesign from '../assets/home/doredesign.svg'


import wavefun from '../assets/home/wavefun.svg'

import { motion } from 'framer-motion'




function HeroSection() {
    return (
        <div>
            <div className='pt-[150px] pb-[50px]   md:py-[176px]'>
                <div className=''>
                    {/* hero */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className=""
                    >
                        <div className='uppercase  text-[32px] sm:text-[52] md:text-[64px] font-[800] text-center leading-[50px] sm:leading-[60px]  md:leading-[80px] tracking-[0px] '>
                            <span className='inline-flex items-center mr-[17px] ' >
                                iam a <img src={Rectangle} alt="user1" className=' w-[98px] sm:w-[128px] h-[58px] sm:h-[64px] p-[8px] ' />
                            </span>
                            <span >FREELANCE </span>
                            <span className='inline-flex flex-wrap justify-center  items-center mr-[17px]'>
                                designer  <img src={Rectangle2} alt="user2" className=' w-[98px] sm:w-[128px] h-[58px] sm:h-[64px] m-[8px]' />
                            </span>
                            <span >From SAN FRANCISCO</span>
                        </div>
                    </motion.div>
                    {/* bar */}

                    <div className='flex  flex-col gap-6 md:gap-0 md:flex-row justify-between  items-center mt-[112px] '>
                        <div className='flex justify-between  w-full   md:w-[716px] md:pr-[123px]'>
                            <img src={doredesign} alt="doredesign" className='text-gray w-[90px] sm:w-[136.36px] ' />
                            <img src={wavefun} alt="wavefun" className='text-gray w-[70px] sm:w-[98px] ' />
                            <img src={simla} alt="simla" className='text-gray w-[60px] sm:w-[98.91px]' />


                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className=""
                        >
                            <div className='poppins-text-small  h-[72px]  md:w-[492px]'>
                                Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection