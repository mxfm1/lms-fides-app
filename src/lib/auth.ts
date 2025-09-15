import { db } from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin } from 'better-auth/plugins'
import { user } from "../../auth-schema";

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
    plugins: [
        nextCookies(),
        admin({
            defaultRole: "user",
            adminRoles: ["admin","superadmin"],
            adminUserIds: ["idUserA","idUserB"]
        })
    ],
    user: {
        additionalFields: {
            role: {
                type: ["user", "admin"],
                input: false
            }
        }
    },
    databaseHooks: {
        user: {
            create: {
               before: async(user) => {
                    const adminEmails = process.env.ADMIN_EMAILS?.split(";") ?? []
                    console.log(adminEmails)

                    if(adminEmails.includes(user.email)){
                        return {data: {...user,role:"admin"}}
                    }

                    return {
                        data: {...user}
                    }
               }
            },
        },
    },
    socialProviders: {
        google: {
            prompt: "select_account",
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }
    },
    cookieOptions: {
        domain: process.env.PUBLIC_APP_URL?.replace(/^https?:\/\//, ""), // elimina https://
        sameSite: "none",
        secure: true
    }
})