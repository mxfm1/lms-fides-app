import { db } from "@/db"
import { user } from "@/db/schema"
import { auth } from "@/lib/auth"
import { eq } from "drizzle-orm"
import { infraRegisterUserPresenter } from "../interface/presenters/auth"

export const getUserByEmail = async(email:string) => {
    const foundUser = await db.query.user.findFirst({
        where: eq(user.email,email)
    })
    return foundUser
}

export const registerUserWithEmail = async({
    name,
    email,
    password,
    role = "user"
}:{
    name:string;
    email:string;
    password:string;
    role?:"user" | "admin";
}) => {
    const response = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            // role:role
        }
    })

    if(!response.user.id){
        throw new Error("No se pudo registrar el usuario..")
    }
    // Fetch the complete user data including role from database
    const completeUser = await getUserByEmail(email)
    
    return {
        id: completeUser?.id,
        name: completeUser?.name,
        email: completeUser?.email,
        image: completeUser?.image,
        role: completeUser?.role
    }
}