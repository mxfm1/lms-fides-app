'use client'

import { useSession } from "@/lib/auth-client"
import { useEffect, useState } from "react"
import { NavbarContent } from "./navbar-content"

// import { ClientSession } from "@/lib/auth/server-auth-fn"
// import {NavbarContent} from "./navbar-content"
// import { useSession } from "@/lib/auth-client"
// import { useState } from "react"


// export type ClientData = ClientSession | null
// export type ClientUserData = { id: string | undefined; name: string | undefined; email: string | undefined; image: string | null | undefined; role: "user" | "admin" | undefined; }

// export const Navbar = ({data,isLoggedIn}:{data:ClientUserData,isLoggedIn:boolean}) => {
//     return (
//        <NavbarContent 
//         isLoggedIn={isLoggedIn} 
//         userData={data} />
//     )
// }

// export const NavbarWrapper = () => {
//     const { data,isPending } = useSession()
//     const [isLoggedIn,setIsLoggedIn] = useState(false)
//     if(data?.user.id != undefined){
//         setIsLoggedIn(true)
//     }
//     const formatedData = {
//         id: data?.user.id,
//         name: data?.user.name,
//         email:data?.user.email,
//         image: data?.user.image,
//         role: data?.user.role
//     }
    
//     if(isPending){
//         return  <div>Cargando...</div>
//     }
//     return (
//         <Navbar data={formatedData} isLoggedIn={isLoggedIn}/>
//     )
// }

export type UserClientData = 
    { id: string | undefined; name: string | undefined; email: string | undefined; image: string | null | undefined; role: "user" | "admin" | undefined; }

export const Navbar = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const { data,isPending} = useSession()

    const dataPresenter: UserClientData = {
        id: data?.user.id ?? undefined,
        name: data?.user.name ?? undefined,
        email: data?.user.email ?? undefined,
        image: data?.user.image ?? null,
        role: data?.user.role ?? undefined
    }

    useEffect(() => {
        if(data?.user.id){
            setIsLoggedIn(true)
        }else{
            setIsLoggedIn(false)
        }
    },[data])

    // if(isPending) return <div>Cargando..</div>
    
    return <NavbarContent userData={dataPresenter} isLoggedIn={isLoggedIn} />
}
