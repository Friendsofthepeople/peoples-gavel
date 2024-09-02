"use client"

import Image from 'next/image'
import Link from 'next/link'

import React, { useState, useEffect, useCallback } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSun, FiMoon } from "react-icons/fi";

const TopNavbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [theme, setTheme] = useState('default')
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the navbar
                setIsOpen(false);
            } else {
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

function toggleTheme(theme:string){
    setTheme(theme)
}
    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <main className={`fixed w-full transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} top-0 z-10 py-4 md:py-8 lg:py-4 px-4 px-8 bg-white`}>
            <nav className="flex flex-col lg:flex-row justify-between items-center w-full gap-4">
                <div className='flex lg:flex-row justify-between items-center gap-16 w-full lg:w-auto' >
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
                    <div className="hidden lg:flex flex-col lg:flex-row  justify-center items-center gap-4">
                        <FaRegCircleUser size={23} />
                        <MdOutlineKeyboardArrowDown size={23} />
                    </div>
                </div>

                <div className="hidden lg:block relative w-[50%]">
                    <textarea
                        className="pl-6 pr-6 py-2 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
                        placeholder="Search for bills by number on name..."
                        rows={1}
                    />

                    <button className="absolute top-2 right-2 text-3 text-gray-500">
                        <IoSearchSharp size={20} />
                    </button>
                </div>

                <div className=" hidden lg:flex flex-col lg:flex-row justify-center items-center gap-4 bg-[#f8f9fb] rounded-xl p-2">
                    <FiSun 
                    onClick={() => toggleTheme("light")}
                     size={25} 
                     className={theme == "light" ? "bg-[#01C909] py-1 rounded-xl cursor-pointer" : 'cursor-pointer bg-white p-1 rounded-xl'}/>
                    <FiMoon onClick={() => toggleTheme("dark")} size={25} 
                    className={theme == "dark" ? "bg-[#01C909] p-1 rounded-xl cursor-pointer" : 'cursor-pointer bg-white p-1 rounded-xl'}/>
                </div>

                {/* for small screen */}
                <div className={`lg:hidden ${menuOpen ? '' : 'hidden'}`}>
                    <div className="flex flex-row justify-between items-center gap-2">
                        <div className="flex justify-center items-center gap-4">
                            <FaRegCircleUser size={23} />
                            <MdOutlineKeyboardArrowDown size={23} />
                        </div>

                        <div className="relative lg:hidden">
                            <textarea
                                className="pl-6 pr-6 py-2 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
                                placeholder="Search for bills by number on name..."
                                rows={1}
                            />

                            <button className="absolute top-2 right-2 text-3 text-gray-500">
                                <IoSearchSharp size={20} />
                            </button>
                        </div>

                        <div className=" lg:hidden flex flex-row lg:flex-row justify-center items-center gap-4 bg-[#f8f9fb] rounded-xl p-2">
                        <FiSun 
                    onClick={() => toggleTheme("light")}
                     size={25} 
                     className={theme == "light" ? "bg-[#01C909] py-1 rounded-xl cursor-pointer" : 'cursor-pointer bg-white p-1 rounded-xl'}/>
                    <FiMoon onClick={() => toggleTheme("dark")} size={25} 
                    className={theme == "dark" ? "bg-[#01C909] p-1 rounded-xl cursor-pointer" : 'cursor-pointer bg-white p-1 rounded-xl'}/>
                </div>

                    </div>
                    <div className='flex w-full flex-col lg:hidden gap-2 p-2 '>
                        <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-start'>
                            <Link href="#">Vote Now</Link>
                        </button>
                        <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-start'>
                            <Link href="#">View new laws</Link>
                        </button>
                        <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-start'>
                            <Link href="#">Explore discussions</Link>
                        </button>
                    </div>
                </div>

            </nav>
        </main>
    )
}

export default TopNavbar;