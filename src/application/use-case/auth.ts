import { RegisterUserData, RegisterUserUseCaseType } from "@/domain/types/auth"
import { emailRegisterPresenter } from "@/domain/presenters/auth"
import { authService } from "@/infraestructure/auth"
import { emailRegisterAdapter } from "@/domain/adapters/auth"
import { success } from "zod"

type RegisterUserResult = | {
    success: true, user: any, message:string
} | {
    succes: false, message: true
}

export const registerUserwithEmailUseCase1 = async(data:RegisterUserData) => {
    try{
        // const safeData = emailRegisterPresenter()
        // const newUser = await authService(safeData)
        
        // console.log("DATA FROM THE FRONTEND",data)
        // console.log("DATA FROM THE API CALL",newUser)
        // if(!newUser){
        //     throw new Error("Error al registrar el usuario..")
        // }

        // const adapter = emailRegisterAdapter()
        // return adapter
        
        console.log("DATA RECEIVED",data)
        const user = await authService(data)
        if(!user){
            return {
                success: false,
                message: "error"
            }
        }
        return {
            success:true,
            user
        }
    }
    catch(error){
        const message = error instanceof Error ? error.message : "Error inesperado"
        return {
            success:false,
            message
        }
    }
}