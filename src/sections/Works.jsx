import React from 'react'
import PageTitle from '../shared/PageTitle'


import ImgWorkCard from '../components/ImgWorkCard'

import worksList from '../data/worksList'


function Works() {



  return (
    <div className='py-[64px] '>
      <div className='flex items-start justify-between   h-[48px]'>
        <PageTitle pageTitle={'Works'} />
        <p className='underline decoration-[0%] decoration-solid underline-offset-[4px] h-[22px]  self-center font-[500] text-[18px]  leading-[150%] sm:leading-[130%] tracking-[0%]'>view all </p>
      </div>

      {/* works cards */}

      <ul>
        {worksList.length> 0 && worksList.map((item,i) => (
          <li  key={i} >
            <ImgWorkCard singleWork={item}/>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Works