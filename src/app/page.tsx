'use client'

import { Button } from "@/components/ui/button";
import AuthForm from "@/presentation/components/auth-form";
import TestEndpoint from "@/presentation/test";
import Image from "next/image";
import { useSession, signIn, signUp, signOut} from "@/lib/auth-client";


export default function Home() {

  const { data:session } = useSession()
  
console.log("SESSION FROM USER",session)

  const handleLoginOption = () => {
    signIn.social({ provider: "google"})
  }
  
  return (
    <>
      <div className="mx-auto w-full h-full" >
        {/* <AuthForm /> */}
        <TestEndpoint />

        <div>
          Bienvenido a la app
        </div>

        {session ? (
          <>
          <div>
            Bienvenido {session.user.name}
          </div>
          <Button
            onClick={() =>  signOut()}
          >
            Cerrar sesion
          </Button>
          </>
        ): (
          <Button
          onClick={handleLoginOption}
        >
          inicia sesion con google
        </Button>
        )}
      </div>
    </>
  );
}
