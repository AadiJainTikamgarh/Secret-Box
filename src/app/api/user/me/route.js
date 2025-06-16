import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token")?.value;
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    return NextResponse.json({ userId: decoded?.id });
  } catch (error) {
    console.log("Something went wrong", error?.message);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
