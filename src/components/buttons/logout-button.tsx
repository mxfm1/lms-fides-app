'use client'

import { signOut, useSession } from "@/lib/auth-client"
import { Button } from "../ui/button"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

export interface LogoutButtonProps
  extends ComponentProps<typeof Button> {
  /** Mensaje que se mostrará dentro del botón */
  label?: string
  /** Callback opcional que se ejecuta después del logout */
  onLoggedOut?: () => void
}

export function LogoutButton({
  className,
  variant = "default",
  size = "default",
  label = "Cerrar sesión",
  onLoggedOut,
  ...props
}: LogoutButtonProps) {
  const router = useRouter()
  const { refetch } = useSession()

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onError: (ctx) => {
          toast.error(ctx.error.message)
        },
        onSuccess: () => {
          toast.success("Sesión cerrada")
          refetch()
          onLoggedOut?.()
          router.push("/") // puedes cambiar a "/login" si prefieres
        },
      },
    })
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleLogout}
      className={cn("w-full", className)}
      {...props}
    >
      {label}
    </Button>
  )
}
