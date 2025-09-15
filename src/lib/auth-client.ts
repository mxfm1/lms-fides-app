import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from 'better-auth/client/plugins'
import type {auth} from '@/lib/auth'


export const { useSession, signIn, signUp, getSession, signOut } = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [inferAdditionalFields<typeof auth>()]
})

export type ClientUserData = {
    id: string;
    name: string;
    email: string;
    image: string | null;
    role: "user" | "admin";
} | null;

export const ClientDataPresenter = (data:ReturnType<typeof useSession>["data"]) => {
    if(!data?.user) return undefined 

    return {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        image: data.user.image ?? null,
        role: data.user.role,
    }
}