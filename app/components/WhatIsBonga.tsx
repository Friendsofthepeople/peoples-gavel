import React from 'react'
import Image from 'next/image'

function WhatIsBonga() {
    return (
        <main className='mt-4 items-center bg-[#01C909]'>
            <p className='mt-4 text-center font-semibold'>What Is Bonga?</p>
            <div className='grid grid-cols-1 md:grid-cols-3 md:px-6 lg:px-28 gap-4 items-center'>
                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/manny-becerra-LA1VawaCjjI-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Speak up, shape your future</p>
                        <p>Bonga is a unique and exciting platform designed to empower you to speak up and make a real impact on the issues that matter most to you. The name "Bonga" comes from the Swahili word meaning "speak up," and that's exactly what we want you to do here!</p>
                   <p>Whether it{"’"}s about new laws being debated, how public funds are being used, or any other issue affecting your community, Bonga gives you the tools to have your voice heard and make a difference.</p>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default WhatIsBonga