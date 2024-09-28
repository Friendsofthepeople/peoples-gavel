import { NextResponse } from "next/server";
const base_url = process.env.BASE_URL;
const token = process.env.ACCESS_TOKEN

export async function GET(req: any) {
  const endpoint = `${base_url}/api/issues/`;

  try {

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`}
      })

    if (response.ok) {
      const res = await response.json();
      return NextResponse.json({
        data: res,
      });
    } else {
      const error = await response.json();

      return NextResponse.json(
        {
          error,
        },
        {
          status: response.status,
        },
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Failed to connect to the server.",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
