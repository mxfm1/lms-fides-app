import { getSession } from "@/lib/auth/server-auth-fn";
import HomeSection from "./_components/home-section";
import FeedSection from "./(protected)/home/_components/feed-section";

export default async function Home() {
  return (
    <HomeWrapper />
  )
}

async function HomeWrapper(){
  const userData = await getSession("client")

  return (
    <div className="w-full max-w-7xl flex justify-center mt-8">
      <HomeSection isLoggedIn={!!userData} clientData={userData} />
      <FeedSection session={!!userData}/>
   </div>
  )
}