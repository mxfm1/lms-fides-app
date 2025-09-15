'use client'

import { signOut } from "@/lib/auth-client"
import { Button } from "../ui/button"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
export function LogoutButton(){

    const router = useRouter()
    const handleLogout = async() => {
        await signOut({
            fetchOptions:{
                onError: (ctx) => {
                    toast.error(ctx.error.message)
                },
                onSuccess:() => {
                    router.push("/profile")
                 }
            }
        })
    }
    
    return (
        <Button variant="destructive" onClick={handleLogout} className="hover:cursor-pointer">
            Cerrar Sesion
        </Button>
    )
}