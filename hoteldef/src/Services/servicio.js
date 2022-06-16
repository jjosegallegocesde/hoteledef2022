


export async function habitacionesServicio(){

   

    const URI='http://localhost:8080/hoteles/v1/habitaciones'

    const PETICION={
        method:'GET'
    }

    let respuesta= await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return(datos)


   



}