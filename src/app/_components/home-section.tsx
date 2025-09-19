'use client'

import { Button } from '@/components/ui/button'
import { UseAuthModal } from '@/context/modal-auth'
import React from 'react'
import { ClientSession } from '@/lib/auth/server-auth-fn'
import { LogoutButton } from '@/components/buttons/logout-button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import PlatformBadge from './platform-badges'

type HomeSectionProps = {
    isLoggedIn?: boolean
    clientData: ClientSession | null
}

const HomeSection = ({
    isLoggedIn,
    clientData
}:HomeSectionProps) => {

    const { openModal,showModal,closeModal} = UseAuthModal()

    const handleStartButton = () => {
      if(!isLoggedIn){
        openModal()
      }
    }
  return (
    <section className='relative py-20 lg:py-32 overflow-hidden'>
         <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  ASME V certified
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Especialízate con nosotros en
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {" "}
                    Técnicas No-Destructivas
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                    Aprende las métodologías utilizadas en la industria para el mantenimiento y análisis de estructuras
                    criticas con nuestra plataforma de especialización. Tenemos profesionales especializados que te enseñaran todo lo necesario poara potenciar tu carrera.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => handleStartButton()}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8"
                >
                  Empezar a aprender
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Ver especializaciones
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <PlatformBadge title='+20' description='Especializaciones' />
                <PlatformBadge title='+100' description='alumnos activos'/> 
                {/* <PlatformBadge title='Comunidad' description='alumnos activos'/>  */}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src="/industrial-workers-in-modern-training-facility-wit.jpg"
                alt="Industrial training facility"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
    </section>
  )
}

export default HomeSection