import React from 'react'
import ExpertisePara from '../components/ExpertisePara'
import PageTitle from '../shared/PageTitle'

import expertiseParasList from '../data/expertiseParasList'


function Expertise() {

    


    return (
        <div className='  py-[50px] md:py-[64px]'>
            <PageTitle pageTitle={'Expertise'} />
            <div className='grid sm:grid-cols-2 gap-[32px] sm:gap-[64px] mt-8'>
                {expertiseParasList.map((item,i) => (
                    <ExpertisePara title={item.title} text={item.text} key={i}  />
                ) )}
            </div>
        </div>
    )
}

export default Expertise