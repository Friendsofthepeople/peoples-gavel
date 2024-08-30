import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

function Header() {
  return (
    <>
      <div className='flex flex-col justify-center items-center max-w-3xl text-cente p-4 mt-12'>
        <h1 className='text-[28px] md:text-[38px] lg:text-[44px] font-bold text-center'>
          Make Your Voice Heard In{' '}
          <span className="text-[#01C909]">Governance</span> And{' '}
          <span className="text-[#01C909]">Decision Making</span>
        </h1>
        <p className='text-center p-2 text-[16px] '>
          Directly influence laws and policies in real time by <br></br> voting alongside your representatives
        </p>

        <div className="flex justify-center items-center gap-4 w-full mt-2">

          <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 w-[25%]  text-center'>
            <Link href="/auth/signup">Sign up</Link>
          </button>
          <button className='border-2 border-[#01C909] bg-[#01C909] py-1 px-4 w-[25%]  text-center text-white rounded-xl'>
            <Link href="/auth/login">Login</Link>
          </button>
        </div>
      </div>

      <div className='relative w-full min-h-[200px] md:min-h-[400px] lg:min-h-[600px] mt-4 lg:mt-4'>
        <Image
          src={"/assets/images/presentation.svg"}
          alt="presentation"
          layout="fill"
          objectFit="contain"
          placeholder='blur'
          blurDataURL={"/assets/placeholders/presentation.svg"}
          priority={true}
        />
      </div>
    </>
  );
}

export default Header;
