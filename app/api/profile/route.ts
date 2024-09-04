import { NextResponse } from "next/server";

const token = ""

const endpoint = `http://www.recallserver.co:8000/auth/users/me`;

export async function GET() {
  try{
    const response = await fetch(
        endpoint,
        {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`}
        }
    )

    if (response){
      const res = await response.json()
      return NextResponse.json({
        data: res
      });
    }else{
      return NextResponse.json({
        message: "Some error occured!!!",
      });
    }
  }catch(error){
    return error;
  }

}