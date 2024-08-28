{/*
import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <>
            <div className='flex flex-col justify-center items-center w-auto p-4'>
                <h1 className='text-[44px] font-bold text-center' >Make Your Voice Heard In
                    <span className="text-[#01C909]">Governance</span> And <span className="text-[#01C909]">Decision Making</span>
                </h1>
                <p>Directly influence laws and policies in real time by voting alongside your representatives</p>
            </div>
            
            <Image
                fill={true}
                placeholder='blur'
                blurDataURL={"/assets/images/presentation.svg"}
                priority={true}
                src={"/assets/images/presentation.svg"}
                alt="presentation" /> 
        </>
    )
}

export default Header
*/}

import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <>
      <div className='flex flex-col justify-center items-center max-w-3xl text-cente p-4 mt-12'>
        <h1 className='text-[44px] font-bold text-center'>
          Make Your Voice Heard In{' '}
          <span className="text-[#01C909]">Governance</span> And{' '}
          <span className="text-[#01C909]">Decision Making</span>
        </h1>
        <p className='text-center p-2 text-[16px] '>
          Directly influence laws and policies in real time by <br></br> voting alongside your representatives
        </p>

        <div className="flex justify-center items-center gap-4 w-full mt-2">
                    <button className='border-2 border-[#01C909] rounded py-1 px-4 w-[20%] text-center' >Sign up</button>
                    <button className='border-2 border-[#01C909] bg-[#01C909] py-1 px-4 w-[20%] text-center text-white rounded'>Login</button>
                </div>

      </div>

      <div className='relative w-full min-h-[450px] mt-4'>
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
