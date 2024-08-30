import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <main className='p-6 lg:p-0 grid grid-col-1 md:grid-cols-2 items-center max-h-screen lg:h-screen'>
      <div className='relative w-full h-[350px] md:min-h-[70%] lg:min-h-[100%] lg:mt-4'>
        <Image
          src={"/assets/images/sammy-wong-mDwBsRcsqbU-unsplash.jpg"}
          alt="presentation"
          layout="fill"
          objectFit="cover"
          placeholder='blur'
          blurDataURL={"/assets/placeholders/presentation.svg"}
          priority={true}
        />
      </div>
      <div className='lg:pl-16 lg:max-w-[70%] pb-6 lg:pb-0'>
        <div className='pb-8 pt-4'>
          <p>Welcome back!</p>
          <p className='text-2xl'>Login to your account</p>
        </div>

        <div className='flex flex-col my-4'>
          <label>Identification card number</label>
          <input className="py-2  px-2 rounded-xl" placeholder='Enter your 8 digit ID number' type="text"></input>
        </div>

        <div className='flex flex-col my-4'>
          <label>Password</label>
          <input className="py-2 px-2  rounded-xl" placeholder='use a combination of letter, digits and symbols' type="text"></input>
        </div>

        <div >
          <input type="submit" className='border-2 border-[#01C909] text-[#ffffff] bg-[#01C909] rounded-xl py-2 px-4 my-2 w-full' value="Login"></input>
        </div>

        <p>Don{"'"}t have an account? <span className='text-[#01C909] cursor-pointer' >
          <Link href="/auth/signup">Sign up</Link>
        </span> </p>
      </div>
    </main>
  )
}

export default page