import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie} from 'better-auth/cookies'

const protectedRoutes = [
    "/home",
    "/profile"
]

export async function middleware(req:NextRequest){
    console.log("Middleware triggered")
    const sessionCookie =  await getSessionCookie(req)
    if(!sessionCookie){
        return NextResponse.redirect(new URL("/",req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/home",
        "/profile"
    ]   
}

