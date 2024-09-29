import { discussionsData } from "@/app/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Discussions() {
  const [discussions, setDiscussions] = useState<[]>();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleGetDiscussions = async () => {
    const res = await fetch("/api/discussions", {
      method: "GET",
    });

    const data = await res.json();
    console.log("data from Discussions", data);
    setDiscussions(data.data);
  };

  useEffect(() => {
    handleGetDiscussions();
  }, []);

  return (
    <div className="pt-[60px] lg:pt-[75px] px-2">
      <div className="hidden lg:flex items-center gap-2 pt-4">
        <button className="border-2 border-[#01C909] rounded-xl py-1 px-2 text-center">
          <Link href="#">Vote Now</Link>
        </button>
        <button className="border-2 border-[#01C909] rounded-xl py-1 px-2 text-center">
          <Link href="#">View new laws</Link>
        </button>
        <button className="border-2 border-[#01C909] rounded-xl py-1 px-2 text-center">
          <Link href="#">Explore discussions</Link>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
      {discussions &&
        discussions.map((discussion: discussionsData) => {
          return (
              <div key={discussion.id} className="bg-[#f8f9fb] rounded-xl p-2 ">
                <p className="p-2 text-[18px] text-semibold">
                  {discussion.title}
                </p>

                <div className="bg-white rounded-xl p-2">
                  <p className="text-[#a7a7ae] text-[14px]">
                    {discussion.content}
                  </p>
                  <p className="text-[#a7a7ae] text-[14px]">......</p>

                  <div className="flex items-center gap-2">
                    <button className="border-2 border-[#01C909] rounded-xl py-1 px-2 text-center">
                      <Link href="#">Read more</Link>
                    </button>
                    <button className="border-2 border-[#01C909] bg-[#01C909] rounded-xl py-1 px-2 text-center">
                      <Link href="#">Vote Now</Link>
                    </button>
                  </div>
                </div>
              </div>
          );
        })}
        </div>
    </div>
  );
}

export default Discussions;
