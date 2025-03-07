import React from 'react'
import useFormatDate from '../hooks/useFormatDate'
import SkillChip from '../shared/SkillChip';
import ActionBtn from '../shared/ActionBtn';

function SingleBlog({ blog }) {

    const formattedDate = useFormatDate(blog.publishDate);


    return (
        <div className='flex flex-col   sm:flex-row md:items-center     mt-8 w-full p-6 md:p-0 '>
            <img src={blog.img} alt={blog.id} className='h-60 md:h-64  w-full sm:w-60   lg:h-full  md:w-[286px]  ' />

            <div className=' flex flex-row sm:flex-col gap-0 sm:gap-4 md:gap-0       justify-between sm:items-center'>



                <div className='flex flex-col items-start  pt-4 lg:mt-0 sm:mx-8  gap-4 '>
                    <p className='poppins-text-medium  '> {formattedDate || ''} </p>
                    <h3 className='font-[600] text-[30px] md:text-[40px] leading-[100%] tracking-[0%]'> {blog.title} </h3>

                    <ul className='flex flex-wrap gap-[8px]  w-full'>
                        {blog.skills.length > 0 && blog.skills.map((skill, i) => (
                            <SkillChip key={i} skill={skill} />
                        ))}
                    </ul>

                </div>
                <div className='block    lg:hidden float-right self-end ' >
                    {/* <ActionBtn btnTxt={'Read'} /> */}

                    <button className='rounded-[100px]  px-[20px] sm:px-[32px] py-[5px] sm:py-[16px] bg-white gap-[10px] font-[600] text-[12px] sm:text-[14px] leading-[24px] tracking-[0%] text-dark'>
                        Read
                    </button>

                </div>
            </div>

            <div className='ml-auto hidden lg:block md:self-end   lg:self-center' >
                <ActionBtn btnTxt={'Read'} />

            </div>
        </div>
    )
}

export default SingleBlog