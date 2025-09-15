'use client'

import { ClientDataPresenter, useSession } from "@/lib/auth-client"
import NavbarContent from "./navbar-content"
import { useEffect, useState } from "react";
import { useAuthLocalContext } from "@/context/auth-context";

export type ClientDataProps ={
    id: string;
    name: string;
    email:string;
    image:string;
    role:string;
}

export const Navbar = () => {
    const {userData,isLoggedIn,isLoading} = useAuthLocalContext()

    if(isLoading) return <div className="h-16 bg-background/50" />
    return <NavbarContent data={userData} isLoggedIn={isLoggedIn} />
}
