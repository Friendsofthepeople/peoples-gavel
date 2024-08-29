import React from 'react'
import Image from 'next/image'

function Features() {
    return (
        <main className='mt-4 items-center'>
            <p className='mt-4 text-center font-semibold'>Features</p>
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
                        <p className='font-semibold py-2'>Easy voting on laws</p>
                        <p>Hit the {'"'}Sign Up{'"'} button on our home page. You{"'"}ll be prompted to create an account using your voter{"'"} ID and email. Don{"'"}t worry, we{"'"}ve got your back with top-notch security to keep your information safe</p>
                    </div>
                </div>

                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/jon-tyson-vVSleEYPSGY-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Real time feedback</p>
                        <p>On your dashboard, You{"'"}ll find a list of bills currently being debated in the Parliament, Senate or your County Assembly. Each bill has a clear, easy-to-understand summary, so you can quickly get up to speed on what{"'"}s at stake</p>
                    </div>
                </div>

                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/element5-digital-T9CXBZLUvic-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Compare votes</p>
                        <p>Visit the {'"'}Legislative Trends{'"'} section to see how Your vote compare to those of other users and representatives.
                            We provide real-time data on hoe people are voting and the trends for each bill. You can also compare by region</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Features