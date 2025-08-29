'use server'

import { emailRegisterProps, registerEmailUseCase, registerUserWithEmailUseCase } from "@/layers/application/use-cases/auth"

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
        if(!userFeedback.success){
            throw new Error("Error al registrar el usuario")
        }
        return userFeedback
    }catch(error){
        const message = error instanceof Error ? error.message : "Error inesperado.."
        return {
            success:false,
            message
        }
    }
}