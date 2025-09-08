// 'use client'

// import { Button } from "@/components/ui/button"
// import { FormControl, FormField, FormItem, FormMessage, Form } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { RegisterFormProps } from "./types"
// import { useState } from "react"
// import { EyeOff, Eye} from 'lucide-react'
// import { RegisterUserData } from "@/domain/types/auth"
// import { emailRegisterUserController } from "@/layers/interface/auth/auth-controller"
// import toast from "react-hot-toast"
// import { useRouter } from "next/navigation"
// import { registerSchemaType } from "../register/page"
// import Loginbutton from "@/components/buttons/login-byutton"

// export const RegisterForm = ({
//     buttonLabel,
//     submitLogic,
//     // form
// }: RegisterFormProps) => {
//     const [visibility,setVisibility] = useState({
//         password:true,
//         confirmPassword:true
//     })
//     const [isLoading,setIsLoading] = useState(false)
//     const router = useRouter()

//     const handleRegisterForm = async(data:registerSchemaType) => {
//         try{
//             setIsLoading(true)
//             const {success,message,data:userInfo} = await emailRegisterUserController(data)
//             if(!userInfo || success == false){
//                 setIsLoading(false)
//                 throw new Error("Error al crear el usuario" + message)
//             }
//             toast.success("Usuario creado con exito")
//             await new Promise((resolve) => setTimeout(resolve,2000))
//             setIsLoading(false)
//             router.push("/profile")
//         }catch(error){
//             const message = error instanceof Error ? error.message : "Error al crear el usuario.."
//             setIsLoading(false)
//             toast.error(message)
//             console.log(message)
//         }
//     }

//     const handleVisibility = (field: "password" | "confirmPassword") => {
//         setVisibility( prev => ({...prev,[field]:!prev[field]} ))
//     }

//     return (
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(handleRegisterForm)}>
//                 <FormField
//                     name="name"
//                     control={form.control}
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Nombre.."
//                                     {...field}
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />

//                 <FormField
//                     name="lastName"
//                     control={form.control}
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Segundo nombre.."
//                                     {...field}
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />

//                 <FormField
//                     name="email"
//                     control={form.control}
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Ingresa tu correo.."
//                                     type="email"
//                                     {...field}
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />

//                 <FormField
//                     name="password"
//                     control={form.control}
//                     render={({ field }) => (
//                         <FormItem className="relative">
//                             <FormControl>
//                                 <Input
//                                     placeholder="Ingresa tu contraseña.."
//                                     type={visibility.password ? "password" : "text"}
//                                     {...field}
//                                 />
//                             </FormControl>
//                             {visibility.password ? (
//                                     <Eye
//                                         onClick={() => handleVisibility("password")}    
//                                         size={18} 
//                                         className="absolute right-4 -top-1/2 translate-y-6"/>
//                                 ): (
//                                     <EyeOff
//                                         onClick={() => handleVisibility("password")}
//                                         size={18} 
//                                         className="absolute right-4 -top-1/2 translate-y-6"
//                                     />
//                                 )}
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />

//                 <FormField
//                     name="confirmPassword"
//                     control={form.control}
//                     render={({ field }) => (
//                         <FormItem className="relative">
//                             <FormControl>
//                                 <Input
//                                     placeholder="Confirma tu contraseña.."
//                                     type={visibility.confirmPassword ? "password" : "text"}
//                                     {...field}
//                                 />
                               
//                             </FormControl>
//                              {visibility.confirmPassword ? (
//                                     <Eye
//                                         onClick={() => handleVisibility("confirmPassword")}
//                                         size={18} 
//                                         className="absolute right-4 -top-1/2 translate-y-6"/>
//                                 ): (
//                                     <EyeOff
//                                         onClick={() => handleVisibility("confirmPassword")}
//                                         size={18} 
//                                         className="absolute right-4 -top-1/2 translate-y-6"
//                                     />
//                                 )}
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />

//                 <Loginbutton isLoading={isLoading} label={buttonLabel} />
//             </form>
//         </Form>
//     )
// }
