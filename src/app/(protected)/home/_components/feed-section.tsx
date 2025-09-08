'use client'

import { Button } from '@/components/ui/button'
import { UseAuthModal } from '@/context/modal-auth'
import { getSession } from '@/lib/auth/server-auth-fn'
import React from 'react'

const FeedSection = ({
    session
}:{session:boolean}) => {

    const {showModal,openModal,closeModal} = UseAuthModal()
    // const session = await getSession("client")

    const handleComment = async() => {
    //    const session = await getSession("client")
       if(!session && showModal == false){
            openModal()
       }
    }

  return (
    <div>
        FEED SECTION

        <Button
            onClick={handleComment}
        >
            Comentar
        </Button>
    </div>
  )
}

export default FeedSection