import { useState } from "react";
import './Lista.css'

function Lista(){
    const familias = ["Boris", "Nacho", "Elias", "Milena"];
    const [mostrar, setMostar] = useState (true)
    return(
        <div>
           <button className="boton" onClick={() => setMostar(!mostrar)}>
{mostrar ? "Ocultar lista" : "Volver a mostar"}
           </button>

       {mostrar &&  <ul>
           {familias.map((familia, index) => (
            <li key={index}> {familia} </li>
           ))}
        </ul>}
        </div>
    )
}

export default Lista;