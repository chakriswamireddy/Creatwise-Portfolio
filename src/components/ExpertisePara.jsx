import React from 'react'
import dot from '../assets/expertise/dot.svg'

function ExpertisePara({title, text}) {
  return (
    <div className='w-full '>
        <div className='flex gap-1 items-center mb-4'>
            <img src={dot} alt="dot" />
            <span className='font-[600] text-[24px] leading-[32px] tracking-[0%]'> {title} </span>
        </div>
        <p className='poppins-text-small '> {text} </p>

    </div>
  )
}

export default ExpertisePara