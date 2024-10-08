"use client"

import React, { FC, useState } from 'react'
import { TbGavel, TbLayoutDashboard } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineLogout, MdOutlineChat, MdOutlineCalendarMonth, } from "react-icons/md";

import { LiaUserSlashSolid } from "react-icons/lia";

interface SideBarProps{
  handleSetActiveView : (viewName: string) => void
}

const SideBar: FC<SideBarProps> = ({handleSetActiveView}) => {
  // State to keep track of the active button
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<boolean>(true)

  // Function to handle button click and update active state
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Function to handle button click and update active state
  const handleButtonClick = (buttonName: string, viewName: string) => {
    setActiveButton(buttonName);
    handleSetActiveView(viewName)
  };

  function MenuItem({ icon, label, isActive, onClick }: {
    icon: any,
    label: string,
    isActive: boolean,
    onClick: () => void
  }) {
    return (
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-2 py-2 px-4 
          rounded-lg hover:border-[#ffffff] transition-colors duration-200
          ${isActive ? 'w-full flex items-center gap-4 border-2 border-[#01C909] bg-[#01C909] text-white rounded-xl mt-4 py-2 px-4 ' : 'flex items-center gap-4 py-2 px-4 border border-[#ffffff] bg-[#ffffff] rounded-xl items-center text-[#a7a7ae] mt-4 w-full'}
      `}
      >
        {icon}
        {expanded && <span>{label}</span>}
      </button>
    );
  }

  return (

    <aside className={`h-screen flex flex-col 
       w-full lg:w-[200px] transition-all duration-300 ease-in-out m-0 left-0 pt-8 lg:pt-12
       ${expanded ? 'px-4' : 'px-2 w-[90px] lg:w-[70px]'} 
       bg-[#f8f9fb]`}>
      <div className="pt-8 px-4">
        <button onClick={toggleExpand} className="hover:bg-gray-100 border-2 border-[#01C909] rounded bg-white cursor-pointer hover:border-[#01C909]">
          {expanded ? <MdKeyboardArrowLeft color='#01C909' size={20} /> : <MdKeyboardArrowRight color='#01C909' size={20} />}
        </button>
      </div>

      <div className="grow">
        <MenuItem
          icon={<TbLayoutDashboard size={20} />}
          label="Dashboard" isActive={activeButton === 'dashboard'}
          onClick={() => handleButtonClick('dashboard', 'issues')} />
        <MenuItem
          icon={<TbGavel size={20} />}
          label="Law" isActive={activeButton === 'Law'}
          onClick={() => handleButtonClick('Law', 'law')} />
        <MenuItem
          icon={<LiaUserSlashSolid size={20} />}
          label="Recall MP" isActive={activeButton === 'Recall'}
          onClick={() => handleButtonClick('Recall', 'recall')} />
        <MenuItem
          icon={<LuHistory size={20} />}
          label="History" isActive={activeButton === 'History'}
          onClick={() => handleButtonClick('History', 'history')} />
        <MenuItem
          icon={<MdOutlineChat size={20} />}
          label="Discussions" isActive={activeButton === 'Discussions'}
          onClick={() => handleButtonClick('Discussions', 'discussions')} />

        <MenuItem
          icon={<MdOutlineCalendarMonth size={20} />}
          label="Calendar" isActive={activeButton === 'Calendar'}
          onClick={() => handleButtonClick('Calendar', 'calender')} />
        <MenuItem
          icon={<FaRegCircleUser size={20} />}
          label="Profile" isActive={activeButton === 'Profile'}
          onClick={() => handleButtonClick('Profile', 'profile')} />
      </div>

      <div>
        <MenuItem
          icon={<MdOutlineLogout size={20} />}
          label="Logout" isActive={activeButton === 'Logout'}
          onClick={() => handleButtonClick('Logout', 'logout')} />

      </div>

    </aside>

  )

}

export default SideBar
