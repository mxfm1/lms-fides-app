'use client'

import { Button } from '@/components/ui/button'
import { FormField,Form, FormItem, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { registerUserWithEmail } from '@/layers/infra/auth'
import { registerUserwithEmailUseCase1 } from '@/application/use-case/auth'

const AuthForm = () => {

    const form = useForm({
        mode:"onSubmit",
        defaultValues: {
            name:"",
            email: "",
            password: ""
        }
    })

    const handleFormSubmit = async(data:any) => {
        console.log("DATA",data)
        const {success,user, message} = await registerUserwithEmailUseCase1(data)
        if(success){
            console.log("Usuario creado exitosamente en respuesta del frontend",user)
        }else{
            console.log("Hubo un error en el use case| RESPUESTA DEL FRONTEND|")
        }
        // console.log("DATA SUBMITED",data)
        console.log("DATA RETURNED",user)
    }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <FormField 
            control={form.control}
            name='name'
            render={({field}) => (
                <>
                    <FormControl>
                        <Input 
                            placeholder='Ingresa tu email'
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </>
            )}
        />

        <FormField 
            name='email'
            control={form.control}
            render={({field}) => (
                <FormControl>
                    <Input 
                        placeholder='Ingresa tu contraseña..'
                        {...field}
                    />
                </FormControl>
            )}
        />

        
        <FormField 
            name='password'
            control={form.control}
            render={({field}) => (
                <FormControl>
                    <Input 
                        placeholder='Ingresa tu contraseña..'
                        {...field}
                    />
                </FormControl>
            )}
        />
        <Button>Enviar formulario</Button>
      </form>
    </Form>
  )
}

export default AuthForm