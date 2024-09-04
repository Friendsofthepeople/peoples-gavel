import { NextResponse } from "next/server";
const endpoint = `http://www.recallserver.co:8000/auth/users`;

export async function POST() {
  try{
    const response = await fetch(endpoint)

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