import React from 'react'

import quote from '../assets/testimonals/quote.svg'

function TestimonyCard({ testim }) {
    return (


        <div className='flex flex-col sm:flex-row justify-between  items-start'>
            <div className='my-4 sm:my-11 '>

                <div className='flex gap-4  mt-4'>

                    <img src={testim.img} alt="user" className='h-14 sm:h-16 w-14 sm:w-16 ' />

                    <div className='flex flex-col gap-1'>
                        <h5 className='font-[600] text-[24px]  leading-8 ' > {testim.name} </h5>
                        <span className='poppins-text-medium'> {testim.company} </span>
                    </div>

                </div>

            </div>
            {/* comment */}
            <div className='relative w-full sm:w-[55%] gap-4 sm:my-4 ' >
                <img src={quote} alt="quote" className='w-[60px] h-[70px] sm:w-[101px] sm:h-[84px] absolute top-0 left-0' />
                <h4 className='text-[20px] sm:[25px] md:text-[32px] font-[500]  md:leading-10 tracking-0 mt-8   '>
                    {testim.comment}
                </h4>
            </div>

        </div>

    )
}

export default TestimonyCard