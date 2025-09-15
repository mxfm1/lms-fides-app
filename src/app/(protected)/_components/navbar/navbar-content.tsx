'use client'

import { LogoutButton } from "@/components/buttons/logout-button";
import { Button } from "@/components/ui/button"
import { UseAuthModal } from "@/context/modal-auth";
import { ClientUserData } from "@/lib/auth-client";
import { BookOpen, Menu } from "lucide-react"
import { MobileMenu } from "./mobile-navbar";

type NavbarContentProps = {
  isLoggedIn: boolean;
  data?: ClientUserData
}

export default function NavbarContent({
  data,
  isLoggedIn
}:NavbarContentProps){

    const {openModal} = UseAuthModal()
    console.log("PROPS DATA",data,isLoggedIn)
    console.log("production url env", process.env.PUBLIC_APP_URL)
    return (
    <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                IndustrialLearn
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {isLoggedIn && data ? (
                <>
                  <LogoutButton /> 
                </>
              ) : (
                <>
                  <NavbarItem label="Inicio" href="/"/>
                  <NavbarItem label="Cursos" href="/courses"/>
                  <NavbarItem label="Sobre Nosotros" href="/about"/>
                  <NavbarItem label="Contáctanos" href="/contact"/>

                  <div className="flex items-center gap-4 ml-32">
                    <Button
                      className="bg-gradient-to-r from-cyan-900 to-slate-500 hover:from-cyan-900/90 hover:to-slate-500/90 hover:cursor-pointer"
                      onClick={() => openModal()}
                    >
                      Inicia sesion
                    </Button>

                    <Button 
                      variant="ghost"
                      onClick={() => openModal("register")}
                      >
                      Registrate
                    </Button>
                  </div>
                </>
              )}
            </div>

            <div>
              <MobileMenu userData={data} isLoggedIn={isLoggedIn} />
            </div>
          </div>
        </div>
      </nav>
    )
}
type NavbarItemProps = {
  label:string;
  href: string;
}

const NavbarItem = ({
  label,
  href
}:NavbarItemProps) => {
  return (
    <a href={href} className="text-muted-foreground hover:text-primary transition-colors">
      {label}
    </a>
  )
}