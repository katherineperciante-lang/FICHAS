import React from "react";
import './Tarjeta.css'

function Tarjeta({nombre,rol}) {
    return(
        
        <div className="tarjeta">
        <h3 className="letras"> {nombre} </h3>
        <p className="letras"> {rol} </p>
        </div>
    )
}

export default Tarjeta;