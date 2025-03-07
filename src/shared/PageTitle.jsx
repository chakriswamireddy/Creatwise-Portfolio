import React from 'react'
import star from '../assets/expertise/starsvg.svg'

function PageTitle({pageTitle}) {
    return (
        <div className='h-[48px] flex items-center gap-[8px] mb-[32px]' >
            <img src={star} alt="star" />
            <p className='font-[700] text-[40px] leading-[100%] tracking-[0%]' > {pageTitle} </p>
        </div>
    )
}

export default PageTitle