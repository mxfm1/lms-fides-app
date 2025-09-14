import { getSession } from '@/lib/auth/server-auth-fn'
import React from 'react'
import FeedSection from './_components/feed-section'

const HomePage = async() => {

  const session = await getSession("client")
  if(session?.role === "user"){
    return (
      <div className='text-white'>
        UserHomepage
      </div>
    )
  }else{
    return (
      <div>
        Welcome to the admin page
      </div>
    )
  }
  return (
    <>
      <div>HomePage Bienvenido</div>
      <pre>{JSON.stringify(session,null,2)}</pre>
      
      <FeedSection  session={true}/>
    </>
  )
}

export default HomePage