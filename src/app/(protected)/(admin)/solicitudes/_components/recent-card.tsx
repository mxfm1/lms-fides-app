'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, BookOpen, CheckCircle, LucideArrowUpRightFromSquare, Settings, UserPlus, XCircle } from "lucide-react";
import Link from "next/link";

type RecentCardProps = {
    key:string;
    name:string;
    userImage:string;

}

const getPriorityColor = (priority:string) => {
    switch(priority){
        case "Alta":
            return "text-red-700" 
        case "media":
            return  "text-yellow-900"
        case "Baja": 
            return "text-slate-500"
    }
}

const getPriorityIcon = (type:string) => {
    switch (type) {
        case "Course Enrollment":
          return <BookOpen className="w-4 h-4" />
        case "Account Access":
          return <UserPlus className="w-4 h-4" />
        case "Course Creation":
          return <BookOpen className="w-4 h-4" />
        case "Instructor Application":
          return <UserPlus className="w-4 h-4" />
        case "Technical Support":
          return <Settings className="w-4 h-4" />
        default:
          return <AlertCircle className="w-4 h-4" />
      }
}

export default function RecentCard(){
    return (
        <Card className="relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-950 transition-opacity group-hover:opacity-0" />

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/90 via-slate-900/90 to-slate-800/90 opacity-0 transition-opacity group-hover:opacity-100" />
           <CardContent className="relative">
           <div     
                key={2}
                className="flex items-center justify-between rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={"/placeholder.svg"} alt={""} />
                    <AvatarFallback>
                      {"Luis Hernandez"
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-foreground">{"Luis Hernandez"}</h4>
                      <Badge variant="outline" className={`text-xs ${getPriorityColor("Account Access")}`}>
                        {getPriorityIcon("media")}
                        <span className="ml-1 capitalize">{"media"}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{"luishernandez@gmail.com "}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm font-medium text-foreground">{"Account Access"}</span>
                      <span className="text-sm text-muted-foreground">{"Verificacion de cuenta"}</span>
                      <span className="text-xs text-muted-foreground">{"25/09/2025"}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="text-red-500 border-red-500/20 hover:bg-red-500/10 bg-transparent"
                  >
                    <XCircle className="w-4 h-4 mr-1" />
                    Rechazar
                  </Button> */}
                  {/* <Button size="sm" className="bg-cyan-900 hover:bg-cyan-900/50 text-white">
                    <LucideArrowUpRightFromSquare className="w-4 h-4 mr-1" />
                    Informacion
                  </Button> */}
                </div>
              </div>
           </CardContent>
        </Card>
    )
}

export const ViewAllRequestButton = () => {
    return (
        <Button
            asChild
            className="w-full bg-white/70 hover:bg-white/90 backdrop-blur-md hover:cursor-pointer text-black">
            <Link href="/solicitudes/todas">
                <p className="text-sm md:text-md">Ver todas las solicitudes</p>
            </Link>
        </Button>
    )
}