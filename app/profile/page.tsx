/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from 'react'
import { userData } from '../types';

const token = process.env.ACCESS_TOKEN

function Page() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [myData, setMyData] = useState<userData | null>(null);

  useEffect(() => {
    
    const fetchData = async () => {
  
      const endpoint = 'api/profile'

  try{

    const response = await fetch(
        endpoint,
        {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`}
        }
    )

    if (response.ok){
      const res = await response.json()
      setMyData(res)
      
    //   console.log("res", res)
    //   console.log("myData: ", myData)
      
    }else{
      const error = await response.json()
     
    }
  }catch (error) {
    console.log("Error", error)
    }


    };
fetchData()
  
    }, [])
    
  
  return (
    <div>
       {myData ? 
       <>
       <p>{myData.data.email}</p>
       <p>{myData.data.id}</p>
       <p>{myData.data.id_number}</p>
       </>
            : 'Loading...'}

    </div>
  )
}

export default Page
