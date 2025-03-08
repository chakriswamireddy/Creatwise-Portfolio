import React from 'react'
import PageTitle from '../shared/PageTitle'
import ViewAllBtn from '../shared/ViewAllBtn'


import envelope1 from '../assets/works/envelope1.png'
import envelope2 from '../assets/works/envelope2.png'

import envelope3 from '../assets/works/envelope3.png'
import SingleBlog from '../components/SingleBlog'

import blogsList from '../data/blogsList'
import star from '../assets/expertise/starsvg.svg'


import { motion } from 'framer-motion'


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
                        <motion.div
                            initial={{ opacity: 0, scaleY: 0.5 }}
                            whileInView={{ opacity: 1, scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className=""
                        >
                            <SingleBlog blog={blog} />
                        </motion.div>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Blogs