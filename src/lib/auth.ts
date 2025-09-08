import { db } from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin } from 'better-auth/plugins'

export const auth = betterAuth({
    database: drizzleAdapter(db,{
        provider: "pg"
    }),
    emailAndPassword: {
        enabled:true
    },
    account: {
        accountLinking: {
            enabled: true
        }
    },
    plugins: [nextCookies()],
    socialProviders: {
        google: {
            prompt: "select_account",
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }
    }
})