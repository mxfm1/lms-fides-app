import { getUserByEmail, registerUserWithEmail } from "@/layers/infra/auth";
import { createUserProfile } from "@/layers/infra/profile";

export type emailRegisterProps = {
    name:string;
    lastName:string;
    email:string;
    password:string;
}

export const registerUserWithEmailUseCase = async({
    name,
    lastName,
    email,
    password
}:emailRegisterProps) => {
    const prevUser = await getUserByEmail(email)
    if(prevUser){
        throw new Error("Correo previamente utilizado..")
    }

    const newUser = await registerUserWithEmail({name,email,password})
    console.log("NEW USER FROM USE CASE",newUser)
    // añadir el perfil
    return newUser
}

export const registerEmailUseCase = async({
    name,
    email,
    lastName,
    password
}:emailRegisterProps) => {
    const prevUser = await getUserByEmail(email)
    if(prevUser){
        throw new Error("Este correo ya ha sido utilizado..")
    }

    const userRegisteredData = await registerUserWithEmail({name,email,password})
    if(!userRegisteredData){
        throw new Error("Error al registrar el usuario..")
    }
    const userProfile = await createUserProfile({...userRegisteredData,lastName})
    console.log("USER PROFILE CREATED",userProfile)
    const registerEmailPresenter = {
        user: {
            userRegisteredData
        },
        profile: {
            userProfile
        }
    }
    return  registerEmailPresenter
}