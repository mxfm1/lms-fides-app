import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from 'better-auth/client/plugins'
import type {auth} from '@/lib/auth'


export const { useSession, signIn, signUp, getSession, signOut } = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [inferAdditionalFields<typeof auth>()]
})