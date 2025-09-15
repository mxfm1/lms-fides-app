'use client'

import { useContext,createContext, ReactNode, useState, useEffect } from "react";
import { ClientDataPresenter, ClientUserData, useSession } from "@/lib/auth-client";

type AuthContextInterface = {
    userData: ClientUserData | null;
    isLoggedIn: boolean;
    isLoading: boolean;
    refetchUser: () => void;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined)

export const LocalAuthProvider = ({children}:{children:ReactNode}) => {
    const {data,isPending,refetch} = useSession()
    const[userData,setUserData] = useState<ClientUserData | null>()
    const[isLoggedIn,setIsLoggedIn] =useState<boolean>(false)

   useEffect(() => {
    if(data){
        setUserData(ClientDataPresenter(data))
        setIsLoggedIn(true)
    }else{
        setUserData(null)
        setIsLoggedIn(false)
    }
   },[data])

    return (
        <AuthContext.Provider value={{
            userData,
            isLoggedIn,
            isLoading: isPending,
            refetchUser: refetch,
        }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuthLocalContext = () => {
    const ctx = useContext(AuthContext)
    if(!ctx) throw new Error("Context must be used within provider")
    return ctx
}