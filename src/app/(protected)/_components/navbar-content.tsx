'use client'

import { Button } from "@/components/ui/button"
import { Bell, Book, BookOpen, Menu, User } from "lucide-react"
import { DropdownUserButton } from "./dropdown-user-content"
import { UserClientData } from "./navbar"
import { LogoutButton } from "@/components/buttons/logout-button"
import { NotifButton } from "./notifications/notif-button"
import { useSession } from "@/lib/auth-client"
import { UseAuthModal } from "@/context/modal-auth"
import { MobileMenu } from "./navbar/mobile-navbar"

export const  NavbarContent = ({
    isLoggedIn,
    userData
}:{
    isLoggedIn:boolean;
    userData: UserClientData
}) => {

    return (
    <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FidesLearn
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
                {isLoggedIn ? <UserNavbar data={userData} /> : <DefaultNavbarContent />}
            </div>

            <div className="md:hidden">
                <MobileMenu isLoggedIn={isLoggedIn} userData={userData} />
            </div>
          </div>
        </div>
      </nav>
    )
}

const UserNavbar = ({ data }: { data: UserClientData }) => {
    return (
        <div className="flex items-center space-x-6">
            <Button className="bg-cyan-900 hover:cursor-pointer" variant="default">
                Explorar
            </Button>
            <NotifButton />
            <DropdownUserButton data={data} />

            {/* <LogoutButton /> */}
        </div>
    )
}

const DefaultNavbarContent = () => {

    const { openModal} = UseAuthModal()

    return (
        <>
            <NavbarItem label="Inicio" />
            <NavbarItem label="Cursos" />
            <NavbarItem label="Sobre Nosotros" />
            <NavbarItem label="Contactanos" />

            <Button 
                onClick={()=> openModal()} 
                variant="outline" 
                className="bg-gradient-to-r from-cyan-900 to-slate-400 hover:from-cyan-900/90 hover:to-slate-400/90 hover:cursor-pointer"
                size="sm"
                >
                Inicia sesion
            </Button>
            <Button
                onClick={() => openModal("register")}
                size="sm"
                className=""
                variant="outline"
              >
                Registrate
              </Button>
        </>
    )
 }

 const NavbarItem = ({label}:{label:string}) => {
    return (
        <a href="#home" className="text-foreground hover:text-primary transition-colors">
            {label}
        </a>
    )
 }

 