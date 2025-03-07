import React from 'react'

import arrow from '../assets/footer/arrow.svg'


function Footer() {

  const profilesList = [
    {
      medium: 'Behnace',
      link: ''
    },
    {
      medium: 'Dribble',
      link: ''
    },
    {
      medium: 'Twitter',
      link: ''
    },
    {
      medium: 'Instagram',
      link: ''
    }

  ]

  return (
    <footer className=' px-[20px] sm:px-[30px] md:px-[100px] sm:mt-[112px] '>

      <div className='text-center mb-8    '>
        <h1 className='mb-4 md:mb-8 font-[800] text-[30px] sm:[text-45px] md:text-[50px] lg:text-[64px]     sm:leading-20 uppercase tracking-[0%]  '>LET’S TALK!</h1>
        {/* <a href="to:mail@"></a> */}

        <div className='flex gap-2 justify-center'>
          <a href="mailto:rehanurraihan@gmail.com" className='decoration-0 poppins-text-medium'> rehanurraihan@gmail.com
          </a>
          <img src={arrow} alt="arrow" />

        </div>
      </div>

      <div className='flex justify-between items-center  flex-col sm:flex-row '>
        <p className='font-[400] text-[14px] leading-5 tracking-[0%] ' > © Rehan Raihan - 2023 </p>

        <ul className='flex gap-2  sm:gap-8 flex-col sm:flex-row items-center jus'>
          {profilesList.length > 0 && profilesList.map((profile, id) => (
            <li key={id}>
              <a href="http://" target="_blank" rel="noopener noreferrer"
                className='font-[400] text-[14px] leading-5 tracking-[0%] '
              > {profile.medium} </a>
              {/* <a href=""> {profile} </a> */}
            </li>
          ))}
          <li></li>
        </ul>



      </div>

    </footer>
  )
}

export default Footer