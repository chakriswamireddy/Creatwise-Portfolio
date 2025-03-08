import React from 'react'
import dot from '../assets/expertise/dot.svg'
import { delay } from 'framer-motion'


import {motion} from 'framer-motion'

function ExpertisePara({ title, text }) {
  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}  
      viewport={{ once: true }}  
      transition={{ duration: 0.6, ease: "easeOut",delay:0.2 }}
      className=""
    >

      <div className='w-full '>
        <div className='flex gap-1 items-center mb-4'>
          <img src={dot} alt="dot" />
          <span className='font-[600] text-[24px] leading-[32px] tracking-[0%]'> {title} </span>
        </div>
        <p className='poppins-text-small '> {text} </p>

      </div>

    </motion.div>
  )
}

export default ExpertisePara