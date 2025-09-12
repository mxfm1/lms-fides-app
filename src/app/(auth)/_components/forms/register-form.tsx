'use client'

import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormMessage, Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {registerSchemaType } from "../../register/page"
import SeparatorWithText from "@/components/separator"
import GoogleButton from "@/components/buttons/google-button"
import { ArrowLeft, Eye, EyeOff, Rocket } from "lucide-react"
import { registerSchema } from "../schema"
import { useState } from "react"
import BackButton from "@/components/buttons/back-button"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { emailRegisterUserController } from "@/layers/interface/auth/auth-controller"
import { UseAuthModal } from "@/context/modal-auth"

type RegisterFormProps = {
    // onSubmit: (data:registerSchemaType) => void
    // onOauthLogin: (type: "google" | "apple") => void
    isLoading?: boolean;
}

export const  RegisterForm = ({
    // onSubmit,
    // onOauthLogin,
    // isLoading
}:RegisterFormProps) => {
  const form = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  const router = useRouter()
  const { switchModalType, closeModal} = UseAuthModal()
  const [isLoading,setIsLoading] =useState(false)
  const[isHidden,setIsHidden] = useState({
    password:true,
    confirmPassword:true
  })

  const handlePasswordVisibility = (field: "password" | "confirmPassword") => {
    setIsHidden(prev => ({...prev,[field]:!prev[field] }))
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
            closeModal(false)
            router.push("/profile")
        // const userProfile = await createUserUseCase()
        }catch(error){
            const message = error instanceof Error ? error.message : "Error al crear el usuario.."
            setIsLoading(false)
            toast.error(message)
            console.log(message)
        }
    }
  const onOauthLogin = (type: "google" | "apple" = "google") => {
    setIsLoading(true)
  }

  return (
    <div className="relative">
      <div className="flex flex-1 flex-col justify-center px-8 sm:px-12 py-12 max-w-lg">
        <div className="mx-auto w-full">
          <div className="mb-4">
            <div className="absolute top-2 left-4">
              {/* <BackButton href="/login" label="Volver"variant={"ghost"} /> */}
              <Button onClick={() => switchModalType("login")} variant="ghost" className="hover:cursor-pointer hover:bg-slate-200">
                <ArrowLeft className="text-black"/>
                <p className="text-sm text-black">Inicia sesion</p>
              </Button>
            </div>
            <h1 className="text-2xl font-bold text-black">Bienvenido!</h1>
            <p className="text-sm text-muted-foreground">
              Completa los campos para continuar con el registro
            </p>
          </div>
          <Form {...form} >
            <form onSubmit={form.handleSubmit(handleEmailRegister)} className="space-y-8 text-black">
              <div className="flex gap-4">
                <FormField 
                    name="name"
                    control={form.control}
                    render={({field}) => (
                      <FormItem className="flex-1 relative min-h-[32px]">
                        <FormControl>
                          <Input {...field} placeholder="Ingresa tu nombre"  className="border-black"/>
                        </FormControl>
                        <FormMessage className="absolute -bottom-6"/>
                      </FormItem>
                    )}
              />

              <FormField 
                name="lastName"
                control={form.control}
                render={({field}) => (
                  <FormItem className="flex-1 relative">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Segundo Nombre(Opcional)"
                        className="border-black"
                      />
                    </FormControl>
                    <FormMessage  className="absolute -bottom-6"/>
                  </FormItem>
                )}
              />
              </div>
              <FormField 
                name="email"
                control={form.control}
                render={({field}) => (
                  <FormItem className="relative min-h-[32px]">
                    <FormControl>
                      <Input {...field} placeholder="Ingresa tu email" className="border-black"/>
                    </FormControl>
                    <FormMessage className="absolute -bottom-6" />
                  </FormItem>
                )}
              />

              <FormField 
                name="password"
                control={form.control}
                render={({field}) => (
                  <FormItem className="relative min-h-[32px]">
                    <FormControl>
                        <Input 
                          {...field}
                          placeholder="Contraseña..."
                          className="border-black"
                          type={isHidden.password ? "password" : "text"}
                        />
                    </FormControl>

                    {isHidden.password ? (
                      <Eye
                        size={16}
                        className="absolute top-[12px] right-4 hover:cursor-pointer"
                        onClick={() =>  handlePasswordVisibility("password")}
                      />
                    ): (
                      <EyeOff 
                        size={16}
                        className="absolute top-[12px] right-4 hover:cursor-pointer"
                        onClick={() => handlePasswordVisibility("password")}
                      />
                    )}
                    <FormMessage className="absolute -bottom-6"/>
                  </FormItem>
                )}
              />

              <FormField 
                name="confirmPassword"
                control={form.control}
                render={({field}) => (
                  <FormItem className="relative min-h-[32px]">
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="Confirma tu contraseña"
                        className="border-black"
                        type={isHidden.confirmPassword ? "password" : "text"}
                      />
                    </FormControl>
                      {isHidden.confirmPassword ? (
                        <Eye
                          onClick={() => handlePasswordVisibility("confirmPassword")} 
                          size={16}
                          className="absolute top-[12px] right-4 hover:cursor-pointer"
                          />
                      ): (
                        <EyeOff onClick={() => handlePasswordVisibility("confirmPassword")}
                          size={16}
                          className="absolute top-[12px] right-4 hover:cursor-pointer"

                        />
                      )}
                    <FormMessage className="absolute -bottom-6"/>
                  </FormItem>
                )}
              />

              <div className="mx-auto w-fit mt-8 mb-4">
                <Button 
                  className="!px-8 gap-3 hover:cursor-pointer"
                  // onClick={() => onSubmit}
                  disabled={isLoading}
                  >
                    {isLoading ? (
                      <p>Cargando..</p>
                    ):(
                      <p>Registrate</p>
                    )}
                  <Rocket size={20}/>
                </Button>
              </div>

              <SeparatorWithText text="o inicia sesion con" />
              <GoogleButton
                isLoading={isLoading}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
