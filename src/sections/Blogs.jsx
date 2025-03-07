import React from 'react'
import PageTitle from '../shared/PageTitle'
import ViewAllBtn from '../shared/ViewAllBtn'


import envelope1 from '../assets/works/envelope1.png'
import envelope2 from '../assets/works/envelope2.png'

import envelope3 from '../assets/works/envelope3.png'
import SingleBlog from '../components/SingleBlog'

import blogsList from '../data/blogsList'
import star from '../assets/expertise/starsvg.svg'

function Blogs() {



    return (
        <div className='my-16'>
            <div className='flex justify-between  h-12 items-center'>
                <div className='h-[48px] flex items-center gap-[8px] ' >
                    <img src={star} alt="star" />
                    <p className='font-[700] text-[30px] sm:text-[40px] leading-[100%] tracking-[0%]' > Blogs </p>
                </div>
                <ViewAllBtn />

            </div>

            <ul>
                {blogsList.length > 0 && blogsList.map((blog) => (
                    <li key={blog.id}>
                        <SingleBlog blog={blog} />
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Blogs