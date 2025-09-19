'use server'

import { headers } from "next/headers"
import { auth } from "../auth"
import { SessionType } from "@/db/schema"
import { roleEnum } from "@/db/schema"

export type RoleType = "user" | "admin"
type FullSession = Awaited<ReturnType<typeof auth.api.getSession>>

export type ClientSession = {
    id:string,
    name:string;
    email:string,
    image: string | null
    role: RoleType
}

export async function getSession(type: "client"): Promise<ClientSession | null>;
export async function getSession(type?: "server"): Promise<FullSession | null>;
export async function getSession(type: "server" | "client" = "server"): Promise<FullSession | ClientSession | null>{
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) return null

    if(type == "server"){
        return session
    }

    return {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image ?? null,
        role: session.user.role
    } satisfies ClientSession
}