'use server'

import { emailRegisterProps, registerEmailUseCase, registerUserWithEmailUseCase } from "@/layers/application/use-cases/auth"
import { auth } from "@/lib/auth"

export const registerUserWithEmailController = async (data:emailRegisterProps) => {
    try{
        // Presenter de ser necesarios
        const user = await registerUserWithEmailUseCase(data)
        console.log("DATA FROM USECASE",user)

        return {
            success:true,
            user
        }
    }catch(error){
        const message =  error instanceof Error ? error.message : "Error inesperado" 
        return {
            success:false,
            message
        }
    }
} 


export const emailRegisterController = async(data:emailRegisterProps) => {
    try{ 
        const userFeedback = await registerEmailUseCase(data)
        return userFeedback
    }catch(error){
        const message = error instanceof Error ? error.message : "Error inesperado.."
        return {
            success:false,
            message
        }
    }
}

export const emailRegisterUserController = async(data:emailRegisterProps) => {
    const userData = await registerEmailUseCase(data)
    if(userData.user && userData.profile){
        return {
            success:true,
            message:"Usuario registrado exitosamente",
            data: userData
        }
    }else{
        return {
            success:false,
            message:"Error al crear al crear el usuario..",
            data: userData
        }
    }
}

type LoginResponse = | {error: null}  | {error:string}

export const loginUserWithEmailController = async(data:{email:string,password:string}):Promise<LoginResponse> => {
    try{
        const response = await auth.api.signInEmail({
        body: {
            email: data.email,
            password: data.password
        }
    })

    return {error: null}

    }catch(error){
        let message = "Ocurrió un error inesperado, inténtalo nuevamente."
        if(error instanceof Error){
            if(error.message == "Invalid email or password"){
                message = "Correo o contraseña invalidos"
            }
        }
        return {
            error: message
        }
    }
}