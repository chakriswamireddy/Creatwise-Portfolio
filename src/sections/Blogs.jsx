import React from 'react'
import PageTitle from '../shared/PageTitle'
import ViewAllBtn from '../shared/ViewAllBtn'


import envelope1 from '../assets/works/envelope1.png'
import envelope2 from '../assets/works/envelope2.png'

import envelope3 from '../assets/works/envelope3.png'
import SingleBlog from '../components/SingleBlog'

import blogsList from '../data/blogsList'

function Blogs() {



    return (
        <div className='my-16'>
            <div className='flex justify-between items-center'>
                <PageTitle pageTitle={'Blogs'} />
                <ViewAllBtn />

            </div>

            <ul>
                {blogsList.length> 0 && blogsList.map((blog) => (
                    <li key={blog.id}>
                        <SingleBlog blog={blog} />
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Blogs