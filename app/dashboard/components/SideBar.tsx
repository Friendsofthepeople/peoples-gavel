"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TbGavel, TbLayoutDashboard } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineLogout, MdOutlineChat, MdOutlineCalendarMonth,  } from "react-icons/md";

function SideBar() {
  // State to keep track of the active button
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<boolean>(true)

  // Function to handle button click and update active state
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Function to handle button click and update active state
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <aside className={`${expanded ? '' : 'h-screen lg:w-[90px]'} h-screen flex flex-col w-full lg:w-[200px] transition-all bg-[#f8f9fb] duration-300 ease-in-out m-0 left-0 px-2`}>
      <div className='grow'>
        <div className='pt-4 pb-2 px-6 w-full lg:block lg:w-auto mt-2' >
          <a href='/'>
            <Image height={100} width={100} alt='logo' src={expanded ? "/logo/logo-full-v.svg" : "/logo/logo-text.svg" }/> 
            {/* <Image height={100} width={100} alt='logo' src={"/logo/logo-full-v.svg"}/>  */}
          </a>
        </div>

<div
 onClick={toggleExpand}
className='absolute top-[80px] right-[20px] lg:right-[-30px] border-2 border-[#01C909] rounded bg-white cursor-pointer hover:border-[#01C909]'>
        {expanded ? <MdKeyboardArrowLeft color='#01C909' size={23} /> : <MdKeyboardArrowRight color='#01C909' size={23} /> } 
</div>

        <Link
          onClick={() => {
            setActiveButton(null);
            handleButtonClick("Dashboard")
          }}
          className={activeButton == "Dashboard" ? 
          `flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ` : `flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4`} href="#">
          <TbLayoutDashboard size={23} />

<span className={`overflow-hidden transition-all duration-300 ease-in-out
           ${expanded ? 'w-full' : 'w-0'}`} > Dashboard </span>
        </Link>

        <Link
          onClick={() => {
            setActiveButton(null);
            handleButtonClick("Laws")
          }}
          className={activeButton == "Laws" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
          <TbGavel size={23} /> 
          <span className={`overflow-hidden transition-all duration-300 ease-in-out
           ${expanded ? 'w-full' : 'w-0'}`} > Laws </span>
        </Link>
        <Link
          onClick={() => {
            setActiveButton(null);
            handleButtonClick("Voting History")
          }}
          className={activeButton == "Voting History" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
          <LuHistory size={23} /> 
          <span className={`overflow-hidden transition-all duration-300 ease-in-out
           ${expanded ? 'w-full' : 'w-0 hidden'}`} > Voting History </span>
        </Link>
        <Link onClick={() => {
          setActiveButton(null);
          handleButtonClick("Discussions")
        }}
          className={activeButton == "Discussions" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
          <MdOutlineChat size={23} /> 
          <span className={`overflow-hidden transition-all duration-300 ease-in-out
           ${expanded ? 'w-full' : 'w-0'}`} >Discussions</span>
        </Link>
        <Link onClick={() => {
          setActiveButton(null);
          handleButtonClick("Calendar")
        }}
          className={activeButton == "Calendar" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
          <MdOutlineCalendarMonth size={23} /> 
          <span className={`overflow-hidden transition-all duration-300 ease-in-out
           ${expanded ? 'w-full' : 'w-0'}`} >Calendar</span>
        </Link>
        <Link onClick={() => {
          setActiveButton(null);
          handleButtonClick("Profile")
        }}
          className={activeButton == "Profile" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
          <FaRegCircleUser size={23} /> 
          <span className={`overflow-hidden transition-all duration-300 ease-in-out
           ${expanded ? 'w-full' : 'w-0'}`} >Profile</span>
        </Link>

      </div>

      <div >
        <Link onClick={() => {
          setActiveButton(null);
          handleButtonClick("Logout")
        }}
          className={activeButton == "Logout" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
          <MdOutlineLogout size={23} /> 
          <span className={`overflow-hidden transition-all duration-300 ease-in-out
           ${expanded ? 'w-full' : 'w-0'}`} >Logout</span>
        </Link>
      </div>

    </aside>
  )
}

export default SideBar