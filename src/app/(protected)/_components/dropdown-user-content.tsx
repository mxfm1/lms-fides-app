import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { BarChart3, Bookmark, BookOpen, ChevronDown, GraduationCap, HelpCircle, LogOut, Mail, Settings, Trophy, User, User2, User2Icon, type LucideIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { UserClientData } from "./navbar"
import { LogoutButton } from "@/components/buttons/logout-button"

export const DropdownUserButton = ({data}:{data:UserClientData}) => {

    const router = useRouter()
    return (
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full p-0 w-9 h-9">
          <Avatar className="w-9 h-9">
            <AvatarImage src={data?.image ?? undefined} alt={data?.name} />
            <AvatarFallback>{data.name ? data?.name.charAt(0).toUpperCase() : data.image}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="font-semibold">{data?.name}</span>
            {data?.email && <span className="text-xs text-muted-foreground">{data.email}</span>}
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <UserDropdownItem label="Mi perfil" href="/profile" icon={User2} />
        <UserDropdownItem label="Mis cursos" href="/courses" icon={BookOpen} />
        <UserDropdownItem label="Certificaciones" href="/certificates" icon={GraduationCap} />
        <UserDropdownItem label="Progreso" href="/progress" icon={BarChart3} />
        <UserDropdownItem label="Favoritos" href="/favorites" icon={Bookmark} />
        <UserDropdownItem label="Logros" href="/achievements" icon={Trophy} />

        <DropdownMenuSeparator />

        {/* AJUSTES Y AYUDA */}
        <UserDropdownItem label="Configuración" href="/settings" icon={Settings} />
        <UserDropdownItem label="Ayuda" href="/help" icon={HelpCircle} />


        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => {}} className="text-red-600 focus:text-red-600 p-0! m-0! hover:bg-secondary!">
          <LogoutButton variant="ghost" className=" hover:cursor-pointer hover:bg-secondary" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    )
}
type UserDropdownItemProps = {
    label:string;
    icon?: LucideIcon
    href:string;
}

export const UserDropdownItem = ({
    label,
    icon:Icon=User,
    href
}:UserDropdownItemProps) => {
    const router = useRouter()
    return (
        <DropdownMenuItem 
            className="hover:bg-secondary! hover:cursor-pointer"
            onClick={() => router.push(href)}>
            <Icon className="w-4 h-4 mr-2" /> {label}
        </DropdownMenuItem>
    )
}