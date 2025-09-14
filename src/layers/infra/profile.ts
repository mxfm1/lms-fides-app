import { auth } from "@/lib/auth";
import { ProfileProps } from "./types";
import { db } from "@/db";
import { profile } from "@/db/schema";

export const createUserProfile = async({id,email,name,lastName,image}:ProfileProps) => {
    // const new Profile 
    if(!id || !email || !name){
        throw new Error("Datos del usuario incompletos..")
    }
    const [insertedProfile] =await db.insert(profile).values({
        userId:id,
        name,
        lastName,
        email,
        imageURL:image
    }).returning()

    const profileResponse = {
        id: insertedProfile.id,
        userId: insertedProfile.userId,
        name: insertedProfile.name,
        lastName: insertedProfile.lastName,
        email: insertedProfile.email,
        imageURL: insertedProfile.imageURL
    }
    return profileResponse
}