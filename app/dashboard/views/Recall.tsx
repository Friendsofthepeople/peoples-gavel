"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface userResponse {
  data: {
    id_number: string;
    email: string;
    id: number;
  }
}

function Recall() {
  const [activeView, setActiveView] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [recallReason, setRecallReason] = useState("");
  const [signature, setSignature] = useState("");
  const [note, setNote] = useState("");
  const [votersCardNumber, setVotersCardNumber] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [recallFormOpen, setRecallFormOpen] = useState<boolean>(false)

  const router = useRouter();

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

  const handleOpenRecallForm = () => {
    setRecallFormOpen(!recallFormOpen)
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess("Signup successful!");
      setError("");
      router.push("/dashboard");
    } else {
      setError(data.message);
      setSuccess("");
    }
  };

  //   recall form component
  const RecallForm = () => {
    return (
      // Suggested code may be subject to a license. Learn more: ~LicenseLog:2021136699.
      <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white max-w-[500px] rounded-xl p-2'>
        <label>Recall your Member of Parliament (MP)</label>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-4">
            <label>Full names</label>
            <input
              id="name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="py-2 px-2  rounded-xl"
              placeholder="Enter your Full Names"
            ></input>
          </div>

          <div className="flex flex-col my-4">
            <label>Voters card number</label>
            <input
              id="votersCardnumber"
              type="text"
              value={votersCardNumber}
              onChange={(e) => setVotersCardNumber(e.target.value)}
              className="py-2 px-2  rounded-xl"
              placeholder="Enter your voters card number"
            ></input>
          </div>
          
          <div className="flex flex-col my-4">
            <label>Reason for recall</label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one">one</SelectItem>
                <SelectItem value="two">two</SelectItem>
                <SelectItem value="three">three</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col my-4">
            <label>Signature</label>
            <textarea
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              className="pl-6 pr-6 py-2 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
              placeholder="Your signature"
              rows={1}
            />
          </div>

          <div className="flex flex-col my-4">
            <label>Leave a note</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="pl-6 pr-6 py-2 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-auto overflow-hidden"
              placeholder="Use a combination of letters, digits and symbols"
              rows={1}
            />
          </div>
          <div>
            <input
              type="submit"
              className="border-2 border-[#01C909] text-[#ffffff] bg-[#01C909] rounded-xl py-2 px-4 my-2 w-full cursor-pointer"
              value="Submit a recall"
            ></input>
          </div>
        </form>
      </div>
    )
  }

  return (
    <>
      <div className='flex items-start'>

        <div className='flex-end w-full'>


          <div className='pt-[60px] lg:pt-[75px] px-2'>
            <div className='hidden lg:flex items-center gap-2 pt-4'>
              <button
                onClick={handleOpenRecallForm}
                className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Start a recall</Link>
              </button>
              <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">View new recalls</Link>
              </button>
              <button className='border-2 border-[#01C909] rounded-xl py-1 px-2 text-center'>
                <Link href="#">Explore discussions</Link>
              </button>
            </div>

            <div>
              <p className='p-2 text-[22px] text-semibold'>Popular recalls</p>
              {recallFormOpen ?
                <RecallForm />
                : ''}

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

        </div>
      </div>
    </>

  )
}

export default Recall