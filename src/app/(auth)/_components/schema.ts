import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "**Requerido" }),
  lastName: z.string(),
  email: z.string().min(1,{message:"**Requerido"}).email({message:"**Email inválido"}),
  password: z
    .string()
    .min(8, { message: "**Mínimo 8 carácteres.." })
    .regex(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      {
        message:
          "**Debe contener al menos un número y una mayus..",
      }
    ),
    confirmPassword: z.string().min(1,{message:"**Requerido.."})
}).refine((data) => data.password === data.confirmPassword,{
    message: "**Las contraseñas no coinciden",
    path: ["confirmPassword"]
});


export const loginSchema = z.object({
  email: z.string().min(1,{message:"**Requerido.."}).email({message:"Email inválido.."}),
  password: z.string().min(1,{message:"**Requerido.."})
})