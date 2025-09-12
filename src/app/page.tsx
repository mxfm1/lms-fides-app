import { getSession } from "@/lib/auth/server-auth-fn";
import HomeSection from "./_components/home-section";
import FeedSection from "./(protected)/home/_components/feed-section";
import Navbar from "./_components/navbar";

export default async function Home() {
  return (
    <HomeWrapper />
  )
}

async function HomeWrapper(){
  const userData = await getSession("client")

  return (
      <div className='min-h-screen bg-gradient-to-br from-background via-background to-card'>
        <Navbar />
        <HomeSection clientData={userData} isLoggedIn={!!userData}/>  
      </div>
  )
}