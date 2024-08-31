"use client"

import Image from 'next/image'
import Link from 'next/link'

import React, { useState, useEffect, useCallback } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";

const TopNavbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
   
    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') {
          if (window.scrollY > lastScrollY) {
            // if scroll down hide the navbar
            setIsOpen(false);
          } else{
            setIsOpen(true);
          }
          // remember current page location to use in the next move
          setLastScrollY(window.scrollY);
        }
      }, [lastScrollY]);
      
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
      
          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [controlNavbar]);

      
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    // 
    // <main className="sticky top-0 z-10 py-4 md:py-8 lg:py-4 px-4 px-8 bg-white">
    return (
        <main className={`fixed w-full transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} top-0 z-10 py-4 md:py-8 lg:py-4 px-4 px-8 bg-white`}>
            <nav className="flex flex-col lg:flex-row justify-between items-center w-full gap-4">
                <div className='flex justify-between items-center gap-4 w-full  lg:block lg:w-auto' >
                    <a href='/'>
                        <Image height={100} width={100} alt='logo' src={'/logo/logo-full-v.svg'} />
                    </a>
                    {
                        menuOpen ? (
                            <IoClose onClick={toggleMenu} size={23} className='block lg:hidden border-2 border-[#01C909] rounded text-[#01C909] text-3xl cursor-pointer' />
                        ) :
                            (
                                <TiThMenu onClick={toggleMenu} size={23} className='block lg:hidden border-2 border-[#01C909] rounded text-[#01C909] text-3xl cursor-pointer' />)
                    }
                </div>

                <div className="hidden lg:flex flex-col lg:flex-row  justify-center items-center gap-4">
                    <FaRegCircleUser size={23} />
                    <MdOutlineKeyboardArrowDown size={23} />
                </div>

                <div className="hidden lg:flex flex-col lg:flex-row  justify-center items-center gap-4">
                    <input className="py-2 px-2 w-auto rounded-xl" placeholder='Search for bills by number on name' type="text"></input>
                </div>

                <div className="hidden lg:flex flex-col lg:flex-row justify-center items-center gap-4">
                    <FiSun size={23} />
                </div>

                {/* for small screen */}
                <div className={`lg:hidden ${menuOpen ? '' : 'hidden'}`}>
                    <div className="flex flex-row justify-between items-center gap-2">
                        <div className="flex justify-center items-center gap-4">
                            <FaRegCircleUser size={23} />
                            <MdOutlineKeyboardArrowDown size={23} />
                        </div>
                        <input className="py-2 px-2 w-auto rounded-xl" placeholder='Search for bills by number on name' type="text"></input>
                    <FiSun size={23} />
                    </div>
                </div>

            </nav>
        </main>
    )
}

export default TopNavbar;