import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function WhatIsBonga() {
    return (
        <>
            <main className='mt-4 items-center text-white bg-[#01C909] p-4' id='about'>
                <div className='hidden lg:grid lg:grid-cols-2 lg:px-6 lg:px-28 gap-4 items-center'>
                    <div>
                        <div className="py-4 mb-4 " >
                            <p className='text-[12px]'>Speak up, shape your future</p>
                            <p className='text-white text-2xl'>What Is Bonga?</p>
                        </div>
                        <p>Bonga is a unique and exciting platform designed to empower you to speak up and make a real impact on the issues that matter most to you. The name {'"'}Bonga{'"'} comes from the Swahili word meaning {'"'}speak up,{'"'} and that{"'"}s exactly what we want you to do here!</p>
                        <p>Whether it{"’"}s about new laws being debated, how public funds are being used, or any other issue affecting your community, Bonga gives you the tools to have your voice heard and make a difference.</p>
                         <Link href="/dashboard">
                        <button className='border-2 border-[#01C909] text-[#01C909] bg-white rounded-xl py-2 px-4 my-2' >Get Started now</button>
                        </Link>
                         </div>

                    <div className='relative w-full min-h-[400px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/ian-macharia-gogGhbvHrYw-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                </div>

                {/* for small screens */}
                <div className='grid grid-cols-1 grid-cols-1 px-6 gap-4 items-center lg:hidden'>
                    <div className='relative w-full min-h-[200px] mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/ian-macharia-gogGhbvHrYw-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div className='py-2 mb-2'>
                        <p className='text-[12px]'>Speak up, shape your future</p>
                        <p className='font-semibold'>What Is Bonga?</p>
                    </div>
                    <div>
                        <p>Bonga is a unique and exciting platform designed to empower you to speak up and make a real impact on the issues that matter most to you. The name {'"'}Bonga{'"'} comes from the Swahili word meaning {'"'}speak up,{'"'} and that{"'"}s exactly what we want you to do here!</p>
                        <br></br>
                        <p>Whether it{"’"}s about new laws being debated, how public funds are being used, or any other issue affecting your community, Bonga gives you the tools to have your voice heard and make a difference.</p>
                    </div>
<Link href="/dashboard">
                    <button className='border-2 border-[#01C909] text-[#01C909] bg-white rounded-xl py-2 px-4 my-2' >Get Started now</button>
</Link>
                </div>
            </main>
        </>
    )
}

export default WhatIsBonga