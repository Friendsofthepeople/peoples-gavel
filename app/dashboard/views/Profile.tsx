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
    setUser(data.data);
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div>      
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
