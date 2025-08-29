import { BASE_API_URL, BASE_LOCALHOST } from "@/lib/config"

export const testEndpoint = async() => {
    try{
        const response = await fetch(`${BASE_API_URL}/register/test`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Client-Type": "web"
            },
            mode: 'cors'
        })

        const data = await response.json()
        return data
    }catch(error){
        console.log("ERROR",error)
    }
}