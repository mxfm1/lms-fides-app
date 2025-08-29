import { createAuthClient } from "better-auth/react";

export const { useSession, signIn, signUp, getSession, signOut } = createAuthClient({
    baseURL: "http://localhost:3000"
})