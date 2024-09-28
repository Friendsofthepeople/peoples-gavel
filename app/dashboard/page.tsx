"use client"

import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { TbLayoutDashboard } from "react-icons/tb";
import { TbGavel } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { MdOutlineChat } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import TopNavBar from './components/TopNavBar';
import SideBar from './components/SideBar';
import Issues from './views/Issues';
import Law from './views/Law';

interface userResponse {
  data: {
    id_number: string;
    email: string;
    id: number;
}
}

function Page() {
  // const [user, setUser] = useState([]);
  // const [error, setError] = useState(null);
  const [activeView, setActiveView] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/profile');
        const data: userResponse = await response.json();
        console.log(data);
      } catch (err) {
        console.log('Failed to fetch Posts');
      }
    };
    fetchUser();
  }, []);

  const handleSetActiveView = (viewName: string) => {
    setActiveView(viewName)
  }

  return (
    <>
    <TopNavBar />
        <div className='flex items-start'>
          <div className="sticky top-0 flex-start ">
            <SideBar handleSetActiveView={handleSetActiveView}/>
          </div>
          <div className='flex-end w-full'>
            {activeView == 'issues' ? <Issues /> :
            activeView == 'law' ? <Law /> : (

    <div className='pt-[60px] lg:pt-[75px] px-2'>
      <div className='hidden lg:flex items-center gap-2 pt-4'>
        <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
          <Link href="#">Vote Now</Link>
        </button>
        <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
          <Link href="#">View new laws</Link>
        </button>
        <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
          <Link href="#">Explore discussions</Link>
        </button>
      </div>

      <div>
      <p className='p-2 text-[22px] text-semibold'>Current Issues</p>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='bg-[#f8f9fb] rounded-xl p-2 '>
          <p className='p-2 text-[18px] text-semibold'>Parliament</p>

          <div className='bg-white rounded-xl p-2'>
            <p className='text-[16px] text-semibold'>NA/2024/001:Education Reform Bill</p>
            <p className='text-[#a7a7ae] text-[14px]'>This bill seeks to overhaul the current educational system by introducing new curricula and teaching methods aimed at enhancing students{"'"} critical thinking</p>
            <p className='text-[#a7a7ae] text-[14px]'>......</p>

            <p className='text-[#a7a7ae] text-[14px]'>Status: <span className='text-bold text-[#000000]' >Debated</span></p>
            <p className='text-[#a7a7ae] text-[14px]'>Deadline for voting: <span className='text-bold text-[#000000]' >5 days</span></p>

            <div className='flex items-center gap-2'>
              <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Read more</Link>
              </button>
              <button className='border-2 border-[#01C909] bg-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Vote Now</Link>
              </button>

            </div>

          </div>
        </div>

        <div className='bg-[#f8f9fb] rounded-xl p-2 '>
          <p className='p-2 text-[18px] text-semibold'>Senate</p>

          <div className='bg-white rounded-xl p-2'>
            <p className='text-[16px] text-semibold'>SB/2024/005:Heathcare improvement Bill</p>
            <p className='text-[#a7a7ae] text-[14px]'>This bill seeks to overhaul the current educational system by introducing new curricula and teaching methods aimed at enhancing students{"'"} critical thinking</p>
            <p className='text-[#a7a7ae] text-[14px]'>......</p>

            <p className='text-[#a7a7ae] text-[14px]'>Status: <span className='text-bold text-[#000000]' >Debated</span></p>
            <p className='text-[#a7a7ae] text-[14px]'>Deadline for voting: <span className='text-bold text-[#000000]' >7 days</span></p>

            <div className='flex items-center gap-2'>
              <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Read more</Link>
              </button>
              <button className='border-2 border-[#01C909] bg-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Vote Now</Link>
              </button>

            </div>

          </div>
        </div>

        <div className='bg-[#f8f9fb] rounded-xl p-2 '>
          <p className='p-2 text-[18px] text-semibold'>Nairobi county</p>

          <div className='bg-white rounded-xl p-2'>
            <p className='text-[16px] text-semibold'>CA/2024/0012:Nairobi urban planning and zoning Bill</p>
            <p className='text-[#a7a7ae] text-[14px]'>This bill seeks to overhaul the current educational system by introducing new curricula and teaching methods aimed at enhancing students{"'"} critical thinking</p>
            <p className='text-[#a7a7ae] text-[14px]'>......</p>

            <p className='text-[#a7a7ae] text-[14px]'>Status: <span className='text-bold text-[#000000]' >First reading</span></p>
            <p className='text-[#a7a7ae] text-[14px]'>Deadline for voting: <span className='text-bold text-[#000000]' >30 days</span></p>

            <div className='flex items-center gap-2'>
              <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Read more</Link>
              </button>
              <button className='border-2 border-[#01C909] bg-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Vote Now</Link>
              </button>

            </div>
          </div>
        </div>
      </div>

      </div>


      <div>
      <p className='p-2 text-[22px] text-semibold'>Recent Activity</p>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='bg-[#f8f9fb] rounded-xl p-2 '>
          <p className='p-2 text-[18px] text-semibold'>Parliament</p>

          <div className='bg-white rounded-xl p-2'>
            <p className='text-[16px] text-semibold'>NA/2024/001:Education Reform Bill</p>
            <p className='text-[#a7a7ae] text-[14px]'>This bill seeks to overhaul the current educational system by introducing new curricula and teaching methods aimed at enhancing students{"'"} critical thinking</p>
            <p className='text-[#a7a7ae] text-[14px]'>......</p>

            <p className='text-[#a7a7ae] text-[14px]'>Status: <span className='text-bold text-[#000000]' >Debated</span></p>
            <p className='text-[#a7a7ae] text-[14px]'>Deadline for voting: <span className='text-bold text-[#000000]' >5 days</span></p>

            <div className='flex items-center gap-2'>
              <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Read more</Link>
              </button>
              <button className='border-2 border-[#01C909] bg-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Vote Now</Link>
              </button>

            </div>

          </div>
        </div>

        <div className='bg-[#f8f9fb] rounded-xl p-2 '>
          <p className='p-2 text-[18px] text-semibold'>Recent Activity</p>

          <div className='bg-white rounded-xl p-2'>
            <p className='text-[16px] text-semibold'>SB/2024/005:Heathcare improvement Bill</p>
            <p className='text-[#a7a7ae] text-[14px]'>This bill seeks to overhaul the current educational system by introducing new curricula and teaching methods aimed at enhancing students{"'"} critical thinking</p>
            <p className='text-[#a7a7ae] text-[14px]'>......</p>

            <p className='text-[#a7a7ae] text-[14px]'>Status: <span className='text-bold text-[#000000]' >Debated</span></p>
            <p className='text-[#a7a7ae] text-[14px]'>Deadline for voting: <span className='text-bold text-[#000000]' >7 days</span></p>

            <div className='flex items-center gap-2'>
              <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Read more</Link>
              </button>
              <button className='border-2 border-[#01C909] bg-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Vote Now</Link>
              </button>

            </div>

          </div>
        </div>

        <div className='bg-[#f8f9fb] rounded-xl p-2 '>
          <p className='p-2 text-[18px] text-semibold'>Nairobi county</p>

          <div className='bg-white rounded-xl p-2'>
            <p className='text-[16px] text-semibold'>CA/2024/0012:Nairobi urban planning and zoning Bill</p>
            <p className='text-[#a7a7ae] text-[14px]'>This bill seeks to overhaul the current educational system by introducing new curricula and teaching methods aimed at enhancing students{"'"} critical thinking</p>
            <p className='text-[#a7a7ae] text-[14px]'>......</p>

            <p className='text-[#a7a7ae] text-[14px]'>Status: <span className='text-bold text-[#000000]' >First reading</span></p>
            <p className='text-[#a7a7ae] text-[14px]'>Deadline for voting: <span className='text-bold text-[#000000]' >30 days</span></p>

            <div className='flex items-center gap-2'>
              <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Read more</Link>
              </button>
              <button className='border-2 border-[#01C909] bg-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Vote Now</Link>
              </button>

            </div>
          </div>
        </div>
      </div>
      
      </div>


    </div>
            )}

          </div>
        </div> 
    </>
        
  )
}

export default Page