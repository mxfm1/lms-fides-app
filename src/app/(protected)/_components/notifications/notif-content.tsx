import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Bell, Inbox } from "lucide-react";

export default function NotificationContent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {/* Ejemplo de badge de cantidad de notificaciones */}
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Placeholder de contenido */}
        <div className="flex flex-col items-center justify-center py-6 text-center text-muted-foreground">
          <Inbox className="h-10 w-10 mb-2 opacity-60" />
          <p className="text-sm font-medium">No tienes notificaciones</p>
          <p className="text-xs">Tus alertas de cursos aparecerán aquí.</p>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button variant="ghost" className="w-full justify-center">
            Ver todas
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
