'use client'

import React from 'react'
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

type LoginButtonProps = {
    label:string;
    isLoading:boolean
}

const Loginbutton = ({
    label,
    isLoading
}:LoginButtonProps) => {
  return (
    <Button disabled={isLoading} className='min-w-64'>
        {isLoading ? (
            <>
                <Loader2 className='mr-1 h-4 w-4 animate-spin'/>
                Cargando
            </>
        ):(
           <p>
            {label}
           </p> 
        )}
    </Button>
  )
}

export default Loginbutton