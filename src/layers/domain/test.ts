class Motor {
    encender(){
        console.log("Motor encendido")
    }
    
}

class Luces{
    encender(){
        console.log("Luces encendidas")
    }
}

class Auto{
    
    private motor: Motor
    private luces: Luces
    
    constructor(motor:Motor,luces:Luces){
        this.motor = motor
        this.luces = luces
    }

    encenderLuces(){
        this.luces.encender()
    }
    arrancar(){
        this.motor.encender()
        this.luces.encender()
    }
}
const motorElectrico = new Motor()
const lucesLED = new Luces()
const auto = new Auto(motorElectrico,lucesLED)
auto.arrancar()

//

interface servicioMensajeria{
    enviar(mensaje:string): void
}

//capa de presentacion
class Celular{
    constructor(private servicio: servicioMensajeria){

    }

    notificar(mensaje: string){
        this.servicio.enviar(mensaje)
    }
}

//capa de dominio
class servicioSMS{
    enviar(mensaje:string){
        console.log("Mensaje enviado via SMS",mensaje)
    }
}

class ServicioCorreo{
    enviar(mensaje:string){
        console.log("Mensaje enviado via correo: ",mensaje)
    }
}

const servicio = new Celular(new ServicioCorreo())
servicio.notificar("Hola")

