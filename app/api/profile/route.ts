import { NextResponse } from "next/server";

const token = ""
const base_url = process.env.BASE_URL;

const endpoint = `${base_url}/auth/users/me`;

export async function GET(): Promise<void | Response> { 
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
      return NextResponse.json({
        data: res
      });
    }else{
      const error = await response.json()
      return NextResponse.json({
        error,
        message: "Some error occured!!!",
      });
    }
  }catch (error) {
    return NextResponse.json({ message: "An error occurred" }); 
  }


}