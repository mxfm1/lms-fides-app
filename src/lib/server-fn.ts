'use server'

import { auth } from "./auth"

type signInType = {
    email:string;
    password:string;
}

type signUpType = {
    name:string;
    email:string;
    password:string
}

export const signInWithEmail = async({
    email,
    password
}:signInType) => {
    await auth.api.signInEmail({
        body: {
            email,
            password
        }
    })
}

export const signUpWithEmail = async({
    name,
    email,
    password
}:signUpType)=> {
    await auth.api.signUpEmail({
        body: {
            name,
            email,
            password
        }
    })
}