import { BASE_API_URL } from "@/lib/config"

export const authService = async(body:any) => {
    console.log("DATA ON INFRAESTRUCTURE ENDPOINT",body)
    const response = await fetch(`${BASE_API_URL}/register/test`,{
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "X-Client-Type": "web"
        },
        body: JSON.stringify(body)
    })

    console.log("RES STATUS",response.status)
    console.log("RES ok",response.ok)
    
    const result = await response.json() 
    if(!response.ok){
        console.log("response error",result)
        throw new Error("Error en la peticion..")
    }    
    console.log("DATA FROM INFRAESTRUCTURE",result)
    return result
}