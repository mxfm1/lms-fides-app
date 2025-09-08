import { getSession } from '@/lib/auth/server-auth-fn'
import React from 'react'
import FeedSection from './_components/feed-section'

const HomePage = async() => {

  const session = await getSession("client")
  return (
    <>
      <div>HomePage Bienvenido</div>
      <pre>{JSON.stringify(session,null,2)}</pre>
      
      <FeedSection  session={true}/>
    </>
  )
}

export default HomePage