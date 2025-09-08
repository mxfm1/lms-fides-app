'use client'

import React, { useState } from 'react'

import { signIn, signUp } from '@/lib/auth-client'
import { RegisterForm } from '../../_components/forms/register-form'
import { registerSchemaType } from '../page'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { getUserByEmail } from '@/layers/infra/auth'
import { emailRegisterUserController } from '@/layers/interface/auth/auth-controller'

const RegisterSection = () => {

    const[userError,setUserError] = useState<string | null>(null)
    const [isLoading,setIsLoading] = useState(false)
    const router = useRouter()

    const handleOauthLogin = (type: "google" | "apple") => {
       const user = signIn.social({provider:type})
       //mmodificar esto
    }

    const handleEmailRegister = async(data:registerSchemaType) => {
        try{
            setIsLoading(true)

            const {success,message,data:userInfo} = await emailRegisterUserController(data)
            if(!userInfo || success == false){
                setIsLoading(false)
                throw new Error("Error al crear el usuario" + message)
            }
            toast.success("Usuario creado con exito")
            await new Promise((resolve) => setTimeout(resolve,2000))
            setIsLoading(false)
            router.push("/profile")
        // const userProfile = await createUserUseCase()
        }catch(error){
            const message = error instanceof Error ? error.message : "Error al crear el usuario.."
            setIsLoading(false)
            setUserError(message)
            toast.error(message)
            console.log(message)
        }
    }

  return (
    <div className='rounded-md shadow-2xl bg-slate-200 min-w-md max-w-xl w-full p-6'>
       {/* <RegisterForm 
            onSubmit={handleEmailRegister}
            onOauthLogin={handleOauthLogin}
            isLoading={isLoading}
       /> */}
       rEGISTERpAGE
    </div>
  )
}

export default RegisterSection