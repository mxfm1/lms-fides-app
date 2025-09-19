'use client'

import { useState } from "react"
import AdminBanner from "../../_components/admin-banner"
import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { SearchBar } from "../../_components/searchbar"
import { Separator } from "@/components/separator"
import RecentCard, { ViewAllRequestButton } from "./recent-card"
import { customBg } from "@/lib/colors"


const RequestContent = () => {

    const [searchTerms, setSearchTerms] = useState("")
    
    const handleSearch = (value:string) => {
        setSearchTerms(value)
        console.log("value from search",value)
    }

  return (
    <div className="space-y-8 w-full">
        <AdminBanner title="Solicitudes" counts={{completed:12,pending:12}} label={{completed: "Peticiones Hechas", pending: "Peticiones Pendientes"}}/>

        <Card className={`${customBg},mx-auto px-4 md:p-8`}>
           <CardHeader>
                <CardDescription className="-ml-6 font-sm">Ordenadas desde la más reciente..</CardDescription>
           </CardHeader>

           <div className="flex items-center space-x-5">
                <div className="w-2/3">
                    <SearchBar callbackFn={handleSearch} value={searchTerms}/>
                </div>
            </div>
            <Separator />

               <div className="space-y-2">
                <RecentCard />
                <RecentCard />
                <RecentCard />
                <RecentCard />
               </div>

            <div className="w-1/3 md:w-1/4 mx-auto mt-3 ">
                <ViewAllRequestButton />
            </div>
        </Card>
    </div>
  )
}

export default RequestContent