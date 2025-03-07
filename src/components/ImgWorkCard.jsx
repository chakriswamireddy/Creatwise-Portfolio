import React from 'react'
import ellipse from '../assets/works/Ellipse.png'
import SkillChip from '../shared/SkillChip'
import ActionBtn from '../shared/ActionBtn'


function ImgWorkCard({ singleWork }) {
  return (
    <div className='bg-gray/[0.48] w-full flex flex-col  sm:flex-row p-8 gap-8 rounded-[40px] mt-8 relative overflow-hidden '>
      <img src={singleWork.img} alt="" className=' h-52 sm:h-auto object-cover  rounded-xl sm:w-1/2 z-2' />

      <div className='sm:w-1/2 flex flex-col items-start justify-between '>

        <div className='flex flex-col items-start'>


          <h3 className='font-[600] text-[30px] sm:text-[40px] leading-[100%] tracking-[0%]'> {singleWork.title} </h3>
          <p className='poppins-text-medium my-4 '>{singleWork.description} </p>
          <ul className='flex flex-wrap gap-[8px]  w-full'>
            {singleWork.skills.length > 0 &&
              singleWork.skills.map((skill, i) => (
                <SkillChip key={i} skill={skill} />
              ))
            }
          </ul>
        </div>
        <div className='mt-4'>
          <ActionBtn btnTxt={'View Case Study'} />

        </div>

        {/* orange blur */}
        <div className='absolute z-1 -bottom-10 left-1/2 -translate-x-1/2  h-[165px] w-[209px]'>
          <img src={ellipse} alt="" />
        </div>

      </div>
    </div>
  )
}

export default ImgWorkCard