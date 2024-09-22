"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, email, password }),
    });

    const data = await res.json();
    console.log("data from login", data);

    if (res.ok) {
      setSuccess("login successful!");
      setError("");
      router.push("/dashboard");
    } else {
      setError(data.message);
      setSuccess("");
    }
  };

  return (
    <main className="lg:p-0 grid grid-col-1 md:grid-cols-2 items-center max-h-screen lg:h-screen">
      <div className="relative w-full h-[350px] md:min-h-[70%] lg:min-h-[100%]">
        <Image
          src={"/assets/images/sammy-wong-mDwBsRcsqbU-unsplash.jpg"}
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
          <p>Welcome back!</p>
          <p className="text-2xl">Login to your account</p>
        </div>
        <div className="pb-8 pt-4">
          <p>Welcome to the Bonga!</p>
          <p className="text-2xl">Create your account</p>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-[#01C909]">{success}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-4">
            <label>Email</label>
            <input
              className="py-2  px-2 rounded-xl"
              placeholder="Enter your Email Address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col my-4">
            <label>Identification card number</label>
            <input
              className="py-2  px-2 rounded-xl"
              placeholder="Enter your 8 digit ID number"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col my-4">
            <label>Password</label>
            <input
              className="py-2 px-2  rounded-xl"
              placeholder="use a combination of letter, digits and symbols"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div>
            <input
              type="submit"
              className="border-2 border-[#01C909] text-[#ffffff] bg-[#01C909] rounded-xl py-2 px-4 my-2 w-full"
              value="Login"
            ></input>
          </div>
        </form>
        <p>
          Don{"'"}t have an account?{" "}
          <span className="text-[#01C909] cursor-pointer">
            <Link href="/auth/signup">Sign up</Link>
          </span>{" "}
        </p>
      </div>
    </main>
  );
}

export default Page;
