import { ReactNode } from "react";
import AdminSidebar from "./_components/admin-sidebar";

export default function AdminLayout({children}:{children:ReactNode}){
    
    return (
        <div className="col md:flex">
            <div className="w-full md:w-56 border-r h-screen block md:fixed">
                <AdminSidebar />
            </div>
            <main className="mt-8 md:ml-56 flex-1 px-12">
                {children}
            </main>
        </div>
    )
}   