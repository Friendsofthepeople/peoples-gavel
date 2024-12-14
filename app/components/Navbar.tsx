"use client"

import Image from 'next/image'
import Link from 'next/link'

import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <main className="sticky top-0 z-10 py-4 md:py-8 lg:py-4 px-4 md:px-8 lg:px-28 bg-white">
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

                <ul className="hidden lg:flex flex-col lg:flex-row  justify-center items-center gap-4">
                    <Link href="#" className="pointer">Home</Link>
                    <Link href="#about" className="pointer">About</Link>
                    <Link href="#working" className="pointer">How it works</Link>
                </ul>
                <div className="hidden lg:flex flex-col lg:flex-row justify-center items-center gap-4">
                    <Link href="/auth/signup">
                        <button className='border-2 border-[#01C909] rounded-xl py-1 px-4' >
                            Sign up
                        </button>
                    </Link>
                    <Link href="/auth/login">
                            <button className='border-2 border-[#01C909] bg-[#01C909] py-1 px-4 text-white rounded-xl'>Login</button>
                    </Link>
                </div>

                {/* for small screen */}
                <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col lg:flex-row  justify-center items-center gap-4">
                        <Link href="#home" className="pointer">Home</Link>
                        <Link href="#about" className="pointer">About</Link>
                        <Link href="#working" className="pointer">How it works</Link>
                    </ul>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4">
                        <Link href="/auth/signup">
                            <button className='border-2 border-[#01C909] rounded-xl py-1 px-4'>Sign up</button>
                        </Link>
                        <Link href="/auth/login">
                            <button className='border-2 border-[#01C909] bg-[#01C909] py-1 px-4 text-white rounded-xl'>Login</button>
                        </Link>
                    </div>
                </div>

            </nav>
        </main>
    )
}

export default Navbar;
