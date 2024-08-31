"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { TbLayoutDashboard } from "react-icons/tb";
import { TbGavel } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { MdOutlineChat } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

function SideBar() {
   // State to keep track of the active button
   const [activeButton, setActiveButton] = useState<string | null>(null);

   // Function to handle button click and update active state
   const handleButtonClick = (buttonName: string) => {
       setActiveButton(buttonName);
   };

  return (
    <aside className='hidden lg:flex flex-col shrink-0 w-[200px] transition-all bg-[#f8f9fb] duration-300 ease-in-out m-0 left-0 p-2'>
      <Link 
      onClick={() => {
        setActiveButton(null);
        handleButtonClick("Dashboard")}}
      className={activeButton == "Dashboard" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
        <TbLayoutDashboard size={23} /> Dashboard
      </Link>
      <Link 
      onClick={() => {
        setActiveButton(null);
        handleButtonClick("Laws")}}
        className={activeButton == "Laws" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
        <TbGavel size={23} /> Laws
      </Link>
      <Link 
      onClick={() => {
        setActiveButton(null);
        handleButtonClick("Voting History")}}
        className={activeButton == "Voting History" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
        <LuHistory size={23} /> Voting History
      </Link>
      <Link onClick={() => {
        setActiveButton(null);
        handleButtonClick("Discussions")}}
        className={activeButton == "Discussions" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
        <MdOutlineChat size={23} /> Discussions
      </Link>
      <Link onClick={() => {
        setActiveButton(null);
        handleButtonClick("Calendar")}}
        className={activeButton == "Calendar" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
       <MdOutlineCalendarMonth size={23} /> Calendar
      </Link>
      <Link onClick={() => {
        setActiveButton(null);
        handleButtonClick("Profile")}}
        className={activeButton == "Profile" ? 'flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4'} href="#">
        <FaRegCircleUser size={23} /> Profile
      </Link>

    </aside>
  )
}

export default SideBar