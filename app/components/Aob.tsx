import Link from 'next/link'
import React from 'react'

function Aob() {
    return (
        <div className='flex flex-col justify-center iteems-center p-12 lg:w-1/2'>
            <p className='text-center'>By joining Bonga, you become part of a vibrant community of young, passionate individuals committed to making a difference.
                Speak up, get involved, and let{"’"}s shape the future together!</p>
            <div >
            <Link href="/dashboard">
                <button className='border-2 border-[#01C909] text-[#ffffff] bg-[#01C909] rounded-xl py-2 px-4 my-2 w-full' >Get Started now</button>
            </Link>
            </div>
        </div>
    )
}

export default Aob