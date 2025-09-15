'use server'

import { ClientSession, getSession } from "@/lib/auth/server-auth-fn"
import NavbarContent from "./navbar-content"


type ClientData = {
    data: ClientSession | null
}

export const Navbar = async({
    data
}:ClientData) => {
    return (
       <NavbarContent />
    )
}

export const NavbarWrapper = async() => {
    
    const user = await getSession("client") 
    
    return (
        <Navbar data={user} />
    )
}
