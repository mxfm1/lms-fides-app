import { ReactNode } from "react";
import { NavbarWrapper } from "./_components/navbar";


export default function ProtectedLayout({children}:{children:ReactNode}){
    return (
        <div>
            {children}
        </div>
    )
}