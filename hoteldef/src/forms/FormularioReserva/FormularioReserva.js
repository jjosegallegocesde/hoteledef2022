import './Formularioreserva.css'

export function FormularioReserva(){

    return(

        <div className="container">
            <div className="row">
                <div className="col-4 text-white">
                    <h4>Desde 180000 (COP $)</h4>
                    <hr></hr>
                    <h4>Reserva Online</h4>
                    <h6>Mejor precio garantizado</h6>
                    <hr></hr>
                    <form className="text-white fw-wold">
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label">Entrada:</label>
                                    <input type="date" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label">Salida:</label>
                                    <input type="date" className="form-control"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label"># Adultos:</label>
                                    <input type="number" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label className="form-label"># Niños:</label>
                                    <input type="number" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn boton w-100">ver precios</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-white mt-3 p-3 caja">
                    <p>
                    ¡Reserva en nuestra Web!
                    Hasta 10% menos que en Booking.com
                    ¡Cancelación gratuita! 
                    </p>
                </div>
            </div>
        </div>





    )


}