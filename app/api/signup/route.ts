import { NextResponse } from "next/server";
const base_url = process.env.BASE_URL;

export async function POST(req: any) {
  const endpoint = `${base_url}/auth/users/`;

  try {
    const {id, email, password } = await req.json();
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        id_number: id,
        email,
        password,
        re_password: password
      }),
    });
    
    if (response.ok) {
      const res = await response.json();
      return NextResponse.json({
        data: res,
      });

    } else {
      const error = await response.json();
 
      return NextResponse.json({
        error,
        id,
        email,
        password,
      }, {
        status: response.status,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "Failed to connect to the server.",
      error: error.message,
    }, {
      status: 500,
    });
  }
}