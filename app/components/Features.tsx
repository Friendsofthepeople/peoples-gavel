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
                        <p>No more long queues or confusing ballots. Bonga allows you to cast your vote on important bills right from your dashboard. Just click, vote, and you{"’"}re done!</p>
                   <p> We{"’"}ve designed the voting system to be intuitive and straightforward. Each bill comes with a summary, so you know exactly what you{"’"}re voting on.</p>
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
                        <p>After casting your vote, share your thoughts on the bill with our real-time feedback feature. Your opinion matters, and we make sure it gets heard instantly</p>
                        <p>Read and respond to comments from other users. Engage in healthy discussions and see diverse perspectives on the issues that matter to you.</p>
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
                        <p>Curious about how your representatives are voting? Bonga provides a detailed comparison between your vote and those of elected officials. This transparency helps you stay informed and hold them accountable.</p>
                        <p>Visualize voting patterns with our easy-to-read charts. See how your votes align with your representatives and understand where they stand on key issues.</p>
                    </div>
                </div>


                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/jon-tyson-xurNTAct1f4-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Transparency in decision making</p>
                        <p>We believe in transparency at every step. Bonga provides open access to all voting records and feedback. You can see how decisions are made and who is making them.</p>
                   <p>Explore detailed records of all bills, including their progress and outcomes. Stay updated with the latest changes and understand how each decision impacts you</p>
                    </div>
                </div>

                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/rivage-EgwhIBec0Ck-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Regional participation</p>
                        <p>Bonga allows you to see how people in your region are voting on issues that affect your community. Understand the local trends and get involved in discussions that matter to your area.</p>
                        <p>View detailed statistics on participation by region. See how your community is engaging with different issues and where your efforts can make the most impact.</p>
                    </div>
                </div>

                <div className='m-2 p-2 border border-2 rounded-2xl'>
                    <div className='relative w-full min-h-[200px] mt-4 lg:mt-4'>
                        <Image
                            className='rounded-2xl'
                            src={"/assets/images/austin-distel-uLnmmE8Y0E4-unsplash.jpg"}
                            alt="presentation"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                            blurDataURL={"/assets/placeholders/presentation.svg"}
                            priority={true}
                        />
                    </div>
                    <div>
                        <p className='font-semibold py-2'>Dynamic discussions</p>
                        <p>Dive into lively discussions on the issues you care about. Our platform provides a space for open, respectful dialogue where everyone{"’"}s voice can be heard. Engage with fellow citizens, share your thoughts, and learn from different perspectives.</p>
                        <p>Explore various discussion forums categorized by topics such as Education, Healthcare, Environment, and more. Find the topics that interest you and join the conversation.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Features