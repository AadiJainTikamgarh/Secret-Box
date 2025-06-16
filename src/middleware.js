import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;
    
    const isPublicPath = path == "/login" || path == "/signup";

    const token = request.cookies.get("token")?.value || ""

    if(isPublicPath && token){
        // const data = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
        return NextResponse.redirect(new URL("/home", request.url))
    }

    if(path === "/" && !token){
      return NextResponse.redirect(new URL("/login", request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/","/signup","/login"]
};
