import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <>
            <div className='items-center bg-gradient-to-t from-[#01C909] py-28 px-6 w-full'>
                <div className='grid grid-cols-1 md:grid-cols-3 md:px-6 lg:px-28 gap-4 items-center'>
                    <div className='relative flex justify-center md:justify-start items-center w-full my-2'>
                    <a href='/'>
                        <Image height={100} width={100} alt='logo' src={'/logo/logo-full-v.svg'} />
                    </a>
                    </div>
                    
                    <div className='my-2'>
                    <ul className="flex justify-center items-center gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>How it works</li>
                </ul>
                    </div>
                    <div className=''>
                        <Link href="/dashboard">
                    <button className='border-2 border-[#01C909] text-[#ffffff] bg-[#01C909] rounded-xl py-2 px-4 my-2 w-full' >Get Started now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer