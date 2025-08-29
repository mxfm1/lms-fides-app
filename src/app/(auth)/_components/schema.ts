import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  lastName: z.string().min(1, { message: "El apellido es obligatorio" }),
  email: z.email("Email Inválido.."),
  password: z
    .string()
    .min(5, { message: "La contraseña debe tener al menos 5 caracteres" })
    .regex(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      {
        message:
          "La contraseña debe contener al menos una mayúscula y un número",
      }
    ),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword,{
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
});
