import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function Law() {

    const [issues, setIssues] = useState("");
   
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const router = useRouter();
  
    const handleGetIssues = async () => {
  
      const res = await fetch("/api/issues", {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });
  
      const data = await res.json();
      console.log("data from issues", data);
  
      if (res.ok) {
        setSuccess("issues successful!");
        setError("");
        // router.push("/dashboard");
      } else {
        setError(data.message);
        setSuccess("");
      }
    };
  

    
  return (
    <div>
        <p>Bonga is a unique and exciting platform designed to empower you to speak up and make a real impact on the issues that matter most to you. The name {'"'}Bonga{'"'} comes from the Swahili word meaning {'"'}speak up,{'"'} and that{"'"}s exactly what we want you to do here!</p>
        <p>Whether it{"’"}s about new laws being debated, how public funds are being used, or any other issue affecting your community, Bonga gives you the tools to have your voice heard and make a difference.</p>
      <p>Law</p>
    </div>
  )
}

export default Law
