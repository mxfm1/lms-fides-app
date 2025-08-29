'use client'

// 'use client'

// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { RegisterForm } from '../_components/forms'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { registerSchema } from '../_components/schema'
// import z from 'zod'
// import { registerUserWithEmailController } from '@/layers/interface/auth/auth-controller'

// export type registerSchemaType = z.infer <typeof registerSchema>

// const RegisterPage = () => {

//   const form = useForm({
//     mode: "onSubmit",
//     resolver: zodResolver(registerSchema),
//     defaultValues: {
//       name: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword:""
//     }
//   })

//   const handleRegisterForm = async(data:registerSchemaType) => {
//     console.log("data from form",data)

//     const { user,success} = await registerUserWithEmailController(data)

//     console.log("RESPONSE FROM FRONTEND",user,success)
//   }

//   return (
//     <div>
//         <div>
//           <RegisterForm 
//             buttonLabel='Registrate' 
//             placeholder='N' 
//             submitLogic={handleRegisterForm} 
//             form={form}
//             />
//         </div>
//     </div>
//   )
// }

// export default RegisterPage

import React from 'react'
import { RegisterForm } from '../_components/forms/register-form'
import { registerSchema } from '../_components/schema'
import z from 'zod'

export type registerSchemaType = z.infer <typeof registerSchema>

const RegisterPage = () => {

  const handleForm = async(data:registerSchemaType) => {
    console.log("DATA",data)
  }

  return (
    <>
      <RegisterForm 
        onSubmit={handleForm}
        />
    </>
  )
}

export default RegisterPage