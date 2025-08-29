'use client'

import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormMessage, Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {registerSchemaType } from "../../register/page"

type RegisterFormProps = {
    onSubmit: (data:registerSchemaType) => void
}

export const  RegisterForm = ({
    onSubmit
}:RegisterFormProps) => {
  const form = useForm<registerSchemaType>({
    // resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField 
          name="name"
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Ingresa tu nombre" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          name="email"
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Ingresa tu email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  )
}
