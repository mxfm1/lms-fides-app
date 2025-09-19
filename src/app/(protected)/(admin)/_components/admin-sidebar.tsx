'use client'
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // si tienes shadcn
import { useSession } from "@/lib/auth-client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
// Si no tienes Sheet, usa a simple dialog.

export default function AdminSidebar() {

    const { data:user} = useSession()
    if(!user) return null
  return (
    <>
      {/* Mobile drawer trigger */}
      {/* <div className="md:hidden p-2 border-b">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md hover:bg-slate-100">
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-4">
            <SidebarContent user={user} />
          </SheetContent>
        </Sheet>
      </div> */}

      {/* Desktop sidebar */}
      <div className="px-4 py-6 w-full md:block">
        <SidebarContent user={user} />
      </div>
    </>
  );
}

function SidebarContent({ user }: { user: any }) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <div className="text-lg font-bold">Bienvenido</div>
        <div className="text-sm text-muted-foreground">Luis Hernandez</div>
      </div>

      <nav className="flex-1 space-y-1">
        <NavItem href="/inicio" label="Resumen" />
        <NavItem href="/solicitudes" label="Solicitudes" />
        <NavItem href="/cursos" label="Cursos" />
        <NavItem href="/usuarios" label="Usuarios" />
        <NavItem href="/analiticas" label="Analíticas" />
      </nav>

      <div className="mt-6 text-xs text-muted-foreground">
        <div>Version 1.0</div>
      </div>
    </div>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
    const pathname = usePathname()
    const isSelected = (pathname === href)
    console.log("PATHANME",pathname)
  return (
    <Link href={href} className={cn("block px-3 py-2 rounded hover:bg-slate-100 hover:text-black",isSelected ? "bg-cyan-900" : "")}>
      {label}
    </Link>
  );
}
