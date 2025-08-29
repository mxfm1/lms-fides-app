'use client'

import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormMessage, Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterFormProps } from "./types"
import { useState } from "react"
import { EyeOff, Eye} from 'lucide-react'

export const RegisterForm = ({
    buttonLabel,
    submitLogic,
    form
}: RegisterFormProps) => {
    const [visibility,setVisibility] = useState({
        password:true,
        confirmPassword:true
    })

    const handleVisibility = (field: "password" | "confirmPassword") => {
        setVisibility( prev => ({...prev,[field]:!prev[field]} ))
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitLogic)}>
                <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Nombre.."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="lastName"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Segundo nombre.."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu correo.."
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="relative">
                            <FormControl>
                                <Input
                                    placeholder="Ingresa tu contraseña.."
                                    type={visibility.password ? "password" : "text"}
                                    {...field}
                                />
                            </FormControl>
                            {visibility.password ? (
                                    <Eye
                                        onClick={() => handleVisibility("password")}    
                                        size={18} 
                                        className="absolute right-4 -top-1/2 translate-y-6"/>
                                ): (
                                    <EyeOff
                                        onClick={() => handleVisibility("password")}
                                        size={18} 
                                        className="absolute right-4 -top-1/2 translate-y-6"
                                    />
                                )}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="confirmPassword"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="relative">
                            <FormControl>
                                <Input
                                    placeholder="Confirma tu contraseña.."
                                    type={visibility.confirmPassword ? "password" : "text"}
                                    {...field}
                                />
                               
                            </FormControl>
                             {visibility.confirmPassword ? (
                                    <Eye
                                        onClick={() => handleVisibility("confirmPassword")}
                                        size={18} 
                                        className="absolute right-4 -top-1/2 translate-y-6"/>
                                ): (
                                    <EyeOff
                                        onClick={() => handleVisibility("confirmPassword")}
                                        size={18} 
                                        className="absolute right-4 -top-1/2 translate-y-6"
                                    />
                                )}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">
                    {buttonLabel}
                </Button>
            </form>
        </Form>
    )
}
