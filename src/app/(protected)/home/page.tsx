
import { getSession } from '@/lib/auth/server-auth-fn'
import React from 'react'
import FeedSection from './_components/feed-section'
import { useSession } from '@/lib/auth-client'

const HomePage = async() => {
  const user = await getSession("client")
  return (
    <>
      <div>HomePage Bienvenido</div>
      <pre>{JSON.stringify(user,null,2)}</pre>
      
      <FeedSection  session={true}/>
    </>
  )
}

export default HomePage