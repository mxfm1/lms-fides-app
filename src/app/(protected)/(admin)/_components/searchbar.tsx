import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

type SearchBarProps = {
    callbackFn:(value:string) => void
    value:string
}

export const SearchBar = ({
    callbackFn,
    value
}:SearchBarProps)  => {

    return (
        <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
            <Input 
                placeholder="Encuentra solicitudes.."
                onChange={(e) => callbackFn(e.target.value)}
                value={value}
                className="pl-10 border-muted-foreground"
            />
        </div>
    )
}