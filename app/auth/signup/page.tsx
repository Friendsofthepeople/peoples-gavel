"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { userData } from "../../types";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

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
    console.log("data from signup", data);

    if (res.ok) {
      setSuccess("Signup successful!");
      setError("");
      router.push("/dashboard");
    } else {
      setError(data.message);
      setSuccess("");
    }
  };

  return (
    <main className="px-6 lg:p-0 grid grid-col-1 md:grid-cols-2 items-center max-h-screen lg:h-screen">
      <div className="relative w-full h-[350px] md:min-h-[70%] lg:min-h-[100%] lg:mt-4">
        <Image
          src={"/assets/images/gustav-schwiering-sWk_wiHCCf4-unsplash.jpg"}
          alt="presentation"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={"/assets/placeholders/presentation.svg"}
          priority={true}
        />
      </div>
      <div className="lg:pl-16 lg:max-w-[70%] pb-6 lg:pb-0">
        <div className="pb-8 pt-4">
          <p>Welcome to the Bonga!</p>
          <p className="text-2xl">Create your account</p>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-[#01C909]">{success}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-4">
            <label>Your Email Address</label>
            <input
              id="name"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-2  rounded-xl"
              placeholder="Enter your email"
            ></input>
          </div>

          <div className="flex flex-col my-4">
            <label>Identification card number</label>
            <input
              id="id"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="py-2 px-2  rounded-xl"
              placeholder="Enter your 8 digit ID number"
            ></input>
          </div>

          {/* <div className='flex flex-col my-4'>
          <label>Identification card number</label>
          <input
          type="text"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          className="py-2 px-2 rounded-xl"
          placeholder='Enter your 8 digit ID number'></input>
        </div> */}

          <div className="flex flex-col my-4">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 px-2  rounded-xl"
              placeholder="use a combination of letter, digits and symbols"
            ></input>
          </div>

          <div>
            <input
              type="submit"
              className="border-2 border-[#01C909] text-[#ffffff] bg-[#01C909] rounded-xl py-2 px-4 my-2 w-full cursor-pointer"
              value="Get Started now"
            ></input>
          </div>
        </form>

        <p>
          Already have an account?{" "}
          <span className="text-[#01C909] cursor-pointer">
            <Link href="/auth/login">Login</Link>
          </span>{" "}
        </p>
      </div>
    </main>
  );
}

export default Page;
