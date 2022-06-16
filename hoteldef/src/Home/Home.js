import { useState, useEffect } from "react"

import './Home.css'

import { FormularioReserva } from '../forms/FormularioReserva/FormularioReserva'

import {habitacionesServicio} from '../Services/servicio.js'

export function Home(){

    const[habitaciones,setHabitaciones]=useState(null)
    const[carga,setCarga]=useState(true)

    useEffect(function(){

        habitacionesServicio()
        .then(function(respuesta){
            setHabitaciones(respuesta.datos)
            setCarga(false)
        })

    },[])

    if(carga){

        return(<h1>cargando...</h1>)

    }else{


        return(

            <>
                <section className="banner">
                    <FormularioReserva />
                </section>
    
                <section>
                    <div className="container-fluid">
                        <div className="row my-5">
                            <div className="col-4 align-self-center">
                                <img src='https://firebasestorage.googleapis.com/v0/b/hotelesjj-59532.appspot.com/o/oku.webp?alt=media&token=55bfcd97-9c98-41e5-9855-18b066808782' className="img-fluid" alt="foto"/>
                            </div>
                            <div className="col-8">
                                <h2>Nickelodeon hoteles y resorts</h2>
                                <p>
                                    El Intercontinental está situado en la zona de Cancún y ofrece vistas a la ciudad de Nuevo León. Ofrece alojamientos de lujo, conexión WiFi gratuita, un spa y una piscina climatizada semiolímpica.
                                    Las habitaciones del Hotel Intercontinental son amplias y cuentan con TV LCD con canales por cable y conexión gratuita a internet de alta velocidad. Algunas incluyen una cocina totalmente equipada y una zona de estar. Además, el servicio de habitaciones está disponible todos los días, las 24 horas.
                                    El establecimiento sirve un desayuno buffet abundante en La Brasserie. Asimismo, los huéspedes pueden degustar platos a la parrilla y pizzas hechas al horno de piedra en el restaurante Fogón de Piedra, o bien pueden tomar platos creativos y vinos exquisitos en la enoteca Cava Del Inter, que elabora cocina exclusiva.
                                    Entre las instalaciones de bienestar se incluyen una bañera de hidromasaje, un solárium y una sauna seca y de vapor. También hay un gimnasio y varios tratamientos de masaje disponibles. Además, el mostrador de información turística puede organizar excursiones y actividades por la zona.
                                </p>
                                <section>

                                    <div className="container">
                                        <div className="row row-cols-1 row-cols-md-3">
                                            {
                                            habitaciones.map(function(habitacion,i){

                                                    return(
                                                        <div className="col" key={i}>
                                                            <div className="card h-100">
                                                                <img src={habitacion.fotografia} className="img-fluid w-100 h-100"/>
                                                            </div>

                                                        </div>
                                                    )

                                            }) 

                                            }

                                        </div>

                                    </div>
    
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
    
                
    
            </>
            
    
    
        )


    }

    





}