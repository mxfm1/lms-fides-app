// import { roleEnum } from "@/db/schema";
// import { adminAc, defaultStatements } from "better-auth/plugins";
// import { createAccessControl } from "better-auth/plugins/access";

// export type Role = (typeof roleEnum.enumValues)[number]

// const statements = {
//     organization: ["update","delete"],
//     member: ["create","read","update","delete"],
//     invitaiton: ["create","cancel"], // ❌ typo: debería ser "invitation"
//     team: ["create","update","delete"] 
// } as const

// export const ac = createAccessControl(statements)

// export const roles = {
//     user: ac.newRole({
//         member: ["read"]
//     }),
//     admin: ac.newRole({
//     ...ac.allowAll(),
// })
// } satisfies Record<Role, ReturnType<typeof ac.newRole>>