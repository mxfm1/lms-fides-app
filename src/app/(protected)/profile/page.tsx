

import { useSession } from '@/lib/auth-client'
import React from 'react'
import FeedSection from '../home/_components/feed-section'

const page = () => {
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