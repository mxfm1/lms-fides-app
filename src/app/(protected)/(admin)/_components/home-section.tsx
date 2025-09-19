"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  DollarSign,
  BookOpen,
} from "lucide-react"
import AdminBanner from "./admin-banner"
import { customBg } from "@/lib/colors"
import { cva } from "class-variance-authority"
import { SearchBar } from "./searchbar"
import { useState } from "react"
import {Separator} from "@/components/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import RecentCard, { ViewAllRequestButton } from "../solicitudes/_components/recent-card"

export function DashboardSection() {

  const metrics = [
    {
      title: "Cantidad de Usuarios",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Users,
      description: "Nuevos usuario",
    },
    {
      title: "Beneficios",
      value: "$700",
      change: "+8.2%",
      trend: "up",
      icon: DollarSign,
      description: "Subscripciones",
    },
    {
      title: "Cursos En Linea",
      value: "25",
      change: "-2.1%",
      trend: "down",
      icon: BookOpen,
      description: "Añadidos el ultimo año",
    },
  ]

  const pendingRequests = [
    {
      id: 1,
      type: "Validacion Documentos",
      user: {
        name: "Lucas Hernandez",
        email: "user@user.com",
        avatar: "/professional-woman-diverse.png",
      },
      course: "Técnico NDT II",
      requestedAt: "2 hours ago",
      priority: "Alta",
    },
    {
        id: 2,
        type: "Validacion Documentos",
        user: {
          name: "Lucas Hernandez",
          email: "user@user.com",
          avatar: "/professional-woman-diverse.png",
        },
        course: "Técnico NDT II",
        requestedAt: "2 hours ago",
        priority: "Media",
      },
    // {
    //   id: 3,
    //   type: "Certificate Request",
    //   user: {
    //     name: "Emily Rodriguez",
    //     email: "e.rodriguez@factory.com",
    //     avatar: "/professional-asian-woman.png",
    //   },
    //   course: "Equipment Maintenance",
    //   requestedAt: "6 hours ago",
    //   priority: "low",
    // },
    // {
    //   id: 4,
    //   type: "Course Access",
    //   user: {
    //     name: "David Thompson",
    //     email: "d.thompson@manufacturing.com",
    //     avatar: "/professional-man-manager.jpg",
    //   },
    //   course: "Quality Control Systems",
    //   requestedAt: "8 hours ago",
    //   priority: "medium",
    // },
  ]

  return (
    <>
        HomePage
    </>
  )
}
