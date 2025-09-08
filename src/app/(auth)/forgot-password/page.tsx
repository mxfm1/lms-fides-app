"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SeparatorWithText from "@/components/separator"

const forgotPasswordSchema = z.object({
  email: z.string().email("Debes ingresar un email válido"),
})

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordSection() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  })

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true)
    try {
      console.log("Sending reset link to:", data.email)
      // Aquí llamas a tu controlador/endpoint de forgot password
    } catch (error) {
      console.error("Error sending reset link:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md rounded-xl border p-6 shadow-lg bg-background">
        
        <div className="flex items-center mb-4">
          <Link href="/login" className="flex items-center text-sm text-muted-foreground hover:underline">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Volver al login
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">¿Olvidaste tu contraseña?</h1>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="tu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Enviando enlace..." : "Enviar enlace de recuperación"}
            </Button>
          </form>
        </Form>

        <SeparatorWithText text="o" />

        <div className="text-center">
          <Link href="/register" className="text-sm text-primary hover:underline">
            ¿No tienes cuenta? Regístrate
          </Link>
        </div>
      </div>
    </div>
  )
}
