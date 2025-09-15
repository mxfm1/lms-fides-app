'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginUserWithEmailController } from "@/layers/interface/auth/auth-controller"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { loginSchema } from "../schema"
import z from "zod"
import SeparatorWithText from "@/components/separator"
import GoogleButton from "@/components/buttons/google-button"
import ForgotPasswordSection from "@/components/forgot-password-section"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Loginbutton from "@/components/buttons/login-byutton"
import { UseAuthModal } from "@/context/modal-auth"
import { useRouter } from "next/navigation"
import { useSession } from "@/lib/auth-client"

export type loginFormDataType = z.infer <typeof loginSchema> 

export const LoginForm = () => {

    const router = useRouter()
    const { refetch } = useSession()
    const {switchModalType,closeModal} =UseAuthModal()
    const [hiddenPasswordField,setHiddenPasswordField] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    
    const form = useForm({
        // mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            email: "",
            password:""
        },
        resolver: zodResolver(loginSchema)
    })
    
    const handleLoginForm = async(data:loginFormDataType) => {
        setIsLoading(true)
        const { error } = await loginUserWithEmailController(data)
        if(error){
            toast.error(error)
            setIsLoading(false)
        }else{
            toast.success("Hola Bienvenido nuevamente")
            closeModal(true)
            refetch()
            router.push("/home")
            setIsLoading(false)
        }
    }

    const handleGoogleClick = () => {
        setIsLoading(true)
    }
    
    return (
        <div className="relative">
            <div className="flex flex-1 flex-col justify-center px-8 sm:px-16 max-w-lg shadow-lg bg-slate-50 py-8 rounded-md">
                <div className="mb-4 space-y-2">
                    <h1 className="font-bold text-2xl text-black">Inicia sesion</h1>
                    <p className="text-sm text-muted-foreground">Bienvenido nuevamente. Inicia sesion en tu cuenta y aprende con los mejores..</p>
                </div>
                <div className="">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLoginForm)} className="text-black">
                    <FormField 
                        name="email"
                        control={form.control}
                        render={({field}) => (
                            <FormItem className="relative mb-8">
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Correo.."
                                    />
                                </FormControl>
                                <FormMessage  className="absolute top-10"/>
                            </FormItem>
                        )}
                    />
                     <FormField 
                        name="password"
                        control={form.control}
                        render={({field}) => (
                            <FormItem className="relative mb-6">
                                <FormControl>
                                    <Input 
                                        {...field}
                                        placeholder="Contraseña.."
                                        type={hiddenPasswordField ? "text" :"password"}
                                    />
                                </FormControl>
                                 {hiddenPasswordField ? (
                                        <Eye className="absolute right-4 bottom-2"
                                            size={18} 
                                            onClick={() => setHiddenPasswordField(prev => !prev)}
                                        />
                                    ):(
                                        <EyeOff
                                            className="absolute right-4 bottom-2"
                                            size={18}
                                            onClick={() => setHiddenPasswordField(prev => !prev)}
                                        />
                                    )}
                                <FormMessage  className="absolute top-10"/>
                            </FormItem>
                        )}
                    />

                    <div className="text-end mb-3 hover:cursor-pointer">
                         <div onClick={() => switchModalType("register")} className="text-sm text-muted-foreground hover:underline text-end">
                            ¿No tienes cuenta? Regístrate
                        </div>
                    </div>

                    <div className="mx-auto w-fit">
                        <Loginbutton label="Inicia sesion" isLoading={isLoading}/>
                    </div>  

                    <SeparatorWithText text="o inicia sesion con" />
                    <GoogleButton 
                        isLoading={isLoading}
                        onStart={handleGoogleClick}
                        />
                    </form>
                </Form>
            </div>
            </div>
        </div>
    )
}