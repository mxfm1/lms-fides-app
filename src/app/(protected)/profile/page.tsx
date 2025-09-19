

import { useSession } from '@/lib/auth-client'
import React from 'react'
import FeedSection from '../home/_components/feed-section'
import { getSession } from '@/lib/auth/server-auth-fn'

const page = async() => {

    // const data = useSession()
    
    // data.data?.user.role
    const data = await getSession("server")
    return (
    <>
        <div>
            Profile Page
        </div>

        <FeedSection session={true}/>
    </>
    
  )
}

export default page