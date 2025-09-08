import React from 'react'
import { Button } from '../ui/button'
import { InfoIcon } from 'lucide-react'
import { FcGoogle } from "react-icons/fc"; 
import Image from 'next/image'

const GoogleButton = ({onClick,isLoading}:{onClick:() =>void,isLoading?:boolean}) => {
  return (
    <Button 
        className='flex justify-center w-full px-4 py-3 rounded-md gap-4 hover:cursor-pointer'
        type='button'
        onClick={onClick}
        disabled={isLoading}
        >
        <FcGoogle  size={20}/>
        <p>Google</p>
    </Button>
  )
}

export default GoogleButton