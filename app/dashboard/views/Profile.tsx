import { userData } from "@/app/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState<userData>();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleGetUser = async () => {
    const res = await fetch("/api/profile", {
      method: "GET",
    });

    const data = await res.json();
    console.log("data from issues", data);
    setUser(data.data);
  };

  useEffect(() => {
    handleGetUser();
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
      
      <p className='p-2 text-[22px] text-semibold'>Profile</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
      {user?.email}
      {user?.id_number}
      {user?.id}
        </div>
    </div>
  );
}

export default Profile;
