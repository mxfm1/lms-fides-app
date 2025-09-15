'use client'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AvatarImage } from "@radix-ui/react-avatar"
import { Bell, BookOpen, DoorClosed, Dot, HelpCircle, LogOut, Mail, Pointer, Settings, Target, User } from "lucide-react"
import { useRouter } from "next/navigation"
import type { LucideIcon } from "lucide-react"


type NotificationContentProps = {
    notifications: [],
}

export const  NotificationContent = () => {

    const router = useRouter()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="relative">
                <Button variant="ghost" className="rounded-full p-0 w-9 h-9 hover:bg-secondary relative">
                <Bell className="hover:bg-secondary"/>
                    <span className="absolute top-5 right-0.5 bg-red-500 text-white text-[10px] font-bold w-2 h-2 rounded-full flex items-center justify-center">

                    </span>
                </Button>
            </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-96">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="font-semibold text-center text-xl">Centro de Notificaciones</span>
            {/* {data?.email && <span className="text-xs text-muted-foreground"></span>} */}
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <NotifItem label="Iniciaste sesion"/>
        <NotifItem label="Iniciaste sesion"/>
        <NotifItem label="Iniciaste sesion"/>
        {/* <DropdownMenuSeparator /> */}
      </DropdownMenuContent>
    </DropdownMenu>
    )
}

type NotifItem = {
    label:string;
    icon?: LucideIcon
}

export const NotifItem = ({
    label,
    icon:Icon = Mail
}:NotifItem) => {
    return (
        <DropdownMenuItem className="hover:bg-secondary! hover:cursor-pointer" onClick={() => {}}>
            <Icon className="w-4 h-4 mr-2"/> 
            <div className="flex flex-col">
                {label}

                <div className="flex items-center space-x-4">
                    <Dot />
                    Acabas de iniciar sesion en X parte. Bienvenido nuevamente!
                </div>

                <span className="text-muted-foreground text-xs mt-2"> 25-04-1998</span>
            </div>
        </DropdownMenuItem>
    )
}