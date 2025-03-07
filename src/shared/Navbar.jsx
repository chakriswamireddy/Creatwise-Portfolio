import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router';

import hamburger from '../assets/navbar/hamburger.svg'

import '../../src/styles/hamburger.css'

function Navbar() {
    const pages = ["home", "about", "projects", "contact"];

    const [openSidebar, setOpenSidebar] = useState(false);



    return (
        <div className='fixed z-10 bg-black flex w-full   justify-between items-center  px-[30px] sm:px-[40px] md:px-[100px] py-4 sm:py-[32px] '>
            <div>
                <img src={logo} alt="logo" className='h-[32px] w-[46.22px]' />
            </div>

            <nav className=' hidden sm:block '>
                <ul className='flex gap-0 '>
                    {pages.length > 0 && pages.map((page, i) => (
                        <li key={i}
                            className=' ' >
                            <NavLink to={`/${page}`}
                                className={({ isActive }) =>
                                    `${isActive ? "bg-white text-dark" : "text-white"}
                                capitalize rounded-[24px] gap-[10px] text-[16px] font-normal leading-[20px] tracking-[0px] py-2 px-[24px]
                                transition-all duration-400 ease-in`
                                }
                            >
                                {page}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>


            <button className='  uppercase border rounded-[100px] px-[24px] py-[8px] gap-[10px] font-[500] leading-6 text-[12px] md:text-[14px] '>
                Hire Me
            </button>


            <div className=' sm:hidden'>



                {/* dummy one */}
                <div className={`ml-auto   opacity-0 ${openSidebar ? '' : 'w-0 h-0'}`}  >
                    <input type="checkbox" id="checkbox2" className="checkbox1 visuallyHidden" />
                    <label htmlFor="checkbox1">
                        <div className="hamburger hamburger1">
                            <span className="bar bar1"></span>
                            <span className="bar bar2"></span>
                            <span className="bar bar3"></span>
                            <span className="bar bar4"></span>
                        </div>
                    </label>

                </div>

                <div className={`ml-auto text-center z-6 ${openSidebar ? 'fixed  top-6 right-6' : ''} `}  >
                    <input type="checkbox" defaultChecked={openSidebar} onClick={() => setOpenSidebar((prev) => !prev)} id="checkbox1" className="checkbox1 visuallyHidden" />
                    <label htmlFor="checkbox1">
                        <div className="hamburger hamburger1">
                            <span className="bar bar1"></span>
                            <span className="bar bar2"></span>
                            <span className="bar bar3"></span>
                            <span className="bar bar4"></span>
                        </div>
                    </label>

                </div>

            </div>


            {/* {
                openSidebar && */}

            <nav className={`fixed top-0 right-0 h-full w-1/2 max-w-[200px] bg-dark  z-4 sm:hidden
    transition-transform duration-300 ease-in-out 
    ${openSidebar ? "translate-x-0" : "translate-x-full"}`}
            >


                <ul className='flex flex-col items-center  gap-5   w-full  mt-30 '>
                    {pages.length > 0 && pages.map((page, i) => (
                        // <li key={i}
                        //     className=' border w-full text-center  ' >
                        <NavLink key={i} to={`/${page}`}
                            className={({ isActive }) =>
                                `${isActive ? "bg-white text-dark" : "text-white"}
                                capitalize rounded-[24px] gap-[10px] text-[16px] font-normal leading-[20px] tracking-[0px] py-2 px-[24px]
                                transition-all duration-400 ease-in w-full text-center `
                            }
                            onClick={() => { setTimeout(() => { setOpenSidebar(false) }, 50) }}
                        >
                            {page}
                        </NavLink>
                        // </li>
                    ))}
                </ul>
            </nav>
            {/* } */}

        </div>
    )
}

export default Navbar