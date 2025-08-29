import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie} from 'better-auth/cookies'

const protectedRoutes = [
    "/home",
    "/profile"
]

export async function middleware(req:NextRequest){
    const sessionCookie =  getSessionCookie(req)
    console.log("SESSION  COOKIE",sessionCookie)
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

