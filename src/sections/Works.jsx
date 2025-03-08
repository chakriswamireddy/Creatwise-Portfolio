import React from 'react'
import PageTitle from '../shared/PageTitle'


import ImgWorkCard from '../components/ImgWorkCard'

import worksList from '../data/worksList'


import {motion} from 'framer-motion'


function Works() {



  return (
    <div className=' my-[50px] sm:my-[64px] '>
      <div className='flex items-start justify-between   h-[48px]'>
        <PageTitle pageTitle={'Works'} />
        <p className='underline decoration-[0%] decoration-solid underline-offset-[4px] h-[22px]  self-center font-[500] text-[18px]  leading-[150%] sm:leading-[130%] tracking-[0%]'>view all </p>
      </div>

      {/* works cards */}

      <ul>
        {worksList.length > 0 && worksList.map((item, i) => (
          <li key={i} >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale:1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className=""
            >

              <ImgWorkCard singleWork={item} />
            </motion.div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Works