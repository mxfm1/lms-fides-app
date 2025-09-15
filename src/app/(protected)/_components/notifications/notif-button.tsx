
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ArrowRight, Bell } from "lucide-react"
import {NotificationContent} from "./notification-content"
import { Suspense } from "react"

export const NotifButton = () => {
    // const getNotifications = async() => {
    //     // const notif = await getNotifications()
    // }
    return (
        <NotificationContent />
    )
}