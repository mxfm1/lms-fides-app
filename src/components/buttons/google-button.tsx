'use client'

import React from 'react'
import { Button } from '../ui/button'
import { InfoIcon, Loader2 } from 'lucide-react'
import { FcGoogle } from "react-icons/fc"; 
import Image from 'next/image'
import { signIn } from '@/lib/auth-client';
import { onStart } from 'better-auth/react';

type GoogleButonProps = {
  isLoading: boolean;
  onStart: () =>  void;
}

const GoogleButton = ({isLoading,onStart}:GoogleButonProps) => {

  const handleAuth = async() => {
    onStart()
    await signIn.social({
      provider: "google",
      callbackURL: "/home"
    })
  }
  return (
    <Button 
        className='flex justify-center w-full px-4 py-3 rounded-md gap-4 hover:cursor-pointer'
        type='button'
        onClick={handleAuth}
        disabled={isLoading}
        >
        {isLoading ? <Loader2 className='animate-spin' /> : 
        <>
          <FcGoogle  size={20}/>
          Google
        </>}
    </Button>
  )
}

export default GoogleButton