'use client'

import { Button } from '@/components/ui/button'
import { UseAuthModal } from '@/context/modal-auth'
import React from 'react'
import { ClientSession } from '@/lib/auth/server-auth-fn'
import { LogoutButton } from '@/components/buttons/logout-button'

type HomeSectionProps = {
    isLoggedIn?: boolean
    clientData: ClientSession | null
}

const HomeSection = ({
    isLoggedIn,
    clientData
}:HomeSectionProps) => {

    const { openModal,showModal,closeModal} = UseAuthModal()
  return (
    <div className="flex justify-center gap-8">
        <div className="flex flex-1 flex-col rounded-md">
            <h2 className='text-2xl font-bold'>Bienvenido a LMSFY</h2>
            <p className='text-md text-shadow-muted-foreground'>La app en donde te convertirás en un mejor profesional</p>
            
            <div className="mt-12 mb-12 space-x-8">
               {isLoggedIn  ? (
                //añadir feature de mejor UX cuando se cierra sesion
                <LogoutButton />
               ): (
                <>
                    <Button
                        className=''
                        onClick={() => openModal("login")}
                    >
                        Iniciar Sesion
                    </Button>
                    <Button>
                        Registrame..
                    </Button>
                </>
               )}
            </div>
        </div>  
        <div className="min-w-64">
          <div>
            This is teh image text
          </div>
        </div>
      </div>
  )
}

export default HomeSection