import { UseAuthModal } from "@/context/modal-auth"
import { UserClientData } from "../navbar"
import { Home, Mail, Menu, type LucideIcon} from "lucide-react"
import { SheetContent,Sheet, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { NotifButton } from "../notifications/notif-button"
import { DropdownUserButton } from "../dropdown-user-content"
import { useRouter } from "next/navigation"
import { LogoutButton } from "@/components/buttons/logout-button"
import { useState } from "react"

export  const MobileMenu = ({
    isLoggedIn,
    userData
  }: {
    isLoggedIn: boolean
    userData: UserClientData
  }) => {
    const { openModal } = UseAuthModal()
    const [open,setIsOpen] = useState(false)

    const onMobileLogoutButton = () => {
        setIsOpen(false)
    }
  
    return (
      <Sheet onOpenChange={setIsOpen} open={open}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="lg" className="hover:bg-secondary hover:cursor-pointer" >
            <Menu className="w-5 h-5"/>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[75%] sm:w-[300px] p-4">
          <SheetHeader>
            <SheetTitle className="text-lg font-bold">Fides LMS</SheetTitle>
          </SheetHeader>
  
          <div className="flex flex-col gap-4 mt-6 h-full">
            {isLoggedIn ? (
              <>
                <MobileSidebarItem label="Inicio" href="/home" icon={Home}/>
                <MobileSidebarItem label="Inicio" href="/home" icon={Home}/>

                <div className="mt-auto mb-4">
                    <LogoutButton className="bg-red-500" onLoggedOut={onMobileLogoutButton}/>
                </div>
                {/* <NotifButton /> */}
                {/* <DropdownUserButton data={userData} /> */}
              </>
            ) : (
              <>
                <MobileSidebarItem label="Inicio" href="/home" icon={Home}/>
                <MobileSidebarItem label="Inicio" href="/home" icon={Home}/>
                <MobileSidebarItem label="Inicio" href="/home" icon={Home}/>
                <MobileSidebarItem label="Inicio" href="/home" icon={Home}/>
                
  
                <div className="mt-auto flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => {
                        openModal()
                        setIsOpen(false)
                    }}
                    variant="outline"
                  >
                    Iniciar sesión
                  </Button>
                  <Button
                    className="flex-1"
                    onClick={() => {
                        openModal("register")
                        setIsOpen(false)
                    }}
                    variant="default"
                  >
                    Registrarse
                  </Button>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    )
  }

type MobileSidebarItem = {
    label: string;
    href: string;
    icon?: LucideIcon;
}

const MobileSidebarItem = ({
    label,
    href,
    icon:Icon=Mail
}:MobileSidebarItem) => {
    const router = useRouter()

    return (
        <Button className="flex items-center gap-4 justify-start hover:bg-secondary py-3!" variant="ghost">
            <Icon className="w-5 h-5" />
            {label}
        </Button>
    )
}