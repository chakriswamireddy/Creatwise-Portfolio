import React from 'react'
import HeroSection from '../sections/HeroSection'
import Expertise from '../sections/Expertise'
import Works from '../sections/Works'
import Experience from '../sections/Experience'
import Blogs from '../sections/Blogs'
import Testimonals from '../sections/Testimonals'
import FAQSection from '../sections/FAQSection'

function HomePage() {
  return (
    <div className=' px-[30px]  sm:px-[40px] md:px-[100px]' >
        <HeroSection />
        <Expertise />
        <Works />
        <Experience />
        <Blogs />
        <Testimonals />
        <FAQSection />

    </div>
  )
}

export default HomePage