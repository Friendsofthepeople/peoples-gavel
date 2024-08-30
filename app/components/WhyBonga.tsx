import React from 'react'
import Image from 'next/image'

function WhyBonga() {
    return (
        <main className='mt-4 items-center'>
           <div className='hidden lg:block'>
            <p className='mt-4 text-center font-semibold'>Why Bonga?</p>
            <p className='text-center p-2  '>In a world where it often feels like your voice doesn{"’"}t 
            <br></br>
            matter, Bonga changes the game. We believe that <br></br> everyone has a right to participate in the decision-making <br></br> process that shapes their community and country. <br></br> Here{"’"}s how Bonga can help you:</p>
           </div>

           <div className=' lg:hidden'>
            <p className='mt-4 text-center font-semibold'>Why Bonga?</p>
            <p className='text-center p-2  '>In a world where it often feels like your voice doesn{"’"}t matter, Bonga changes the game. We believe that everyone has a right to participate in the decision-making process that shapes their community and country. Here{"’"}s how Bonga can help you:</p>
           </div>

            <div className='grid grid-cols-1 md:grid-cols-3 md:px-6 lg:px-28 gap-4 items-center'>
                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/kelly-sikkema-U20dtBwxHEU-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Empower your voice</p>
                        <p>Speak up on important issues and see how your input directly influences decisions. Bonga ensures that your voice isn{"’"}t just heard—it{"’"}s counted.</p>
                   {/* <p> We{"’"}ve designed the voting system to be intuitive and straightforward. Each bill comes with a summary, so you know exactly what you{"’"}re voting on.</p> */}
                    </div>
                </div>

                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/anne-nygard-KAx_Ok89I7Q-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Stay Informed</p>
                        <p>Get the latest updates on bills and policies being discussed in Parliament, the Senate, and county assemblies. Know what{"’"}s happening, why it matters, and how it affects you.</p>
                    </div>
                </div>

                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/jason-leung-mZNRsYE9Qi4-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Engage in real-time</p>
                        <p>Participate in discussions, leave feedback, and see how others are voting. Bonga brings together a community of engaged citizens just like you, eager to share their views and make a change.</p>
                    </div>
                </div>


                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/brett-jordan-x5WxEYe2DKA-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Hold Leaders accountable</p>
                        <p>Compare your votes with those of your representatives and hold them accountable for their actions. Bonga provides transparency and insight into the legislative process, so you can ensure that your leaders are truly representing you.</p>
                    </div>
                </div>

                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/elena-mozhvilo-j06gLuKK0GM-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Make Informed decisions</p>
                        <p>Access detailed information and interactive insights that help you make informed decisions, whether you{"’"}re voting on a new bill or choosing who to support in the next election</p>
                    </div>
                </div>

                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/possessed-photography-igJrA98cf4A-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Fun and engaging</p>
                        <p>With gamified elements, interactive discussions, and a user-friendly interface, Bonga makes civic participation not just easy, but fun and rewarding!.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WhyBonga