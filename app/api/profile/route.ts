import { headers } from "next/headers";
import { NextResponse } from "next/server";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1NDQxMzE2LCJpYXQiOjE3MjUzNTQ5MTYsImp0aSI6IjVjNmQwOWJlZTU0MDRkYTU5MmE4MWE3ODlkNThlMDdjIiwidXNlcl9pZCI6MX0.mGLUpFkkL342Z9R95dyX-1KZkLQbnYvmC68EPTgSkOU"
// const token = process.env.NEXT_PUBLIC_TOKEN
// const user_id = process.env.NEXT_PUBLIC_USER_ID
// const page_id = process.env.NEXT_PUBLIC_PAGE_ID

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