import { useState } from 'react'
import './App.css'
import Tarjeta from './component/Tarjeta'
import Lista from './component/Lista';

function App() {
  const peliculas = ["Crepúculo", "Agua para Elefantes", "Grey's Anatomy", "La Bella y la Bestia", "La Sirenita"];

  const personas = [
    {nombre: "Elho", rol:"Cantante"},
    {nombre: "Alana", rol:"Flautista"},
    {nombre: "Maria", rol:"Empleada"}
  ];

    return (
    <>
    <h2 className='titulo'>Ejercicio 1</h2>
    
    <div cl>
     <ul>
      {peliculas.map( (pelicula, index) => (
        <li key={index}> {pelicula} </li>
      ))}
     </ul>
</div>

     <hr />
     <h2 className='titulo'>Ejercicio 2</h2>
<div className='contenedor'>
     {personas.map((persona,index) =>
    (
      <Tarjeta
      key={index}
      nombre={persona.nombre}
      rol={persona.rol}
      />
    ))}
</div>
<div>
  <h2 className='titulo'>Ejercicio 3</h2>
</div>
<Lista/>

    </>
  )
}

export default App
