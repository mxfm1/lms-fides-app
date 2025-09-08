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
    password
}:{
    name:string;
    email:string;
    password:string
}) => {
    const response = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
        }
    })
    const {name:userName,email:userEmail,id, image} = response.user
    
    return {
        id:id,
        name:userName,
        email:userEmail,
        image:image
    }
}
