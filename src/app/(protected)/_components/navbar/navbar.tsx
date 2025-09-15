'use client'

import { ClientDataPresenter, useSession } from "@/lib/auth-client"
import NavbarContent from "./navbar-content"
import { useEffect, useState } from "react";

export type ClientDataProps ={
    id: string;
    name: string;
    email:string;
    image:string;
    role:string;
}

export const Navbar = () => {

    const {data,isPending} = useSession()
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    // useEffect(() => {
    //     if(data === null){
    //         setIsLoggedIn(false)
            
    //     }else{
    //         setIsLoggedIn(true)
    //     }
    // },[data])

    // if(isPending)return null

    const pdata = ClientDataPresenter(data)
    return <NavbarContent data={pdata} isLoggedIn={!!data} />
}
