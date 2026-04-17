import Contador from "./components/Contador";
import "./App.css";
import { useState } from "react";

function App() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <section id="center">
        <Contador></Contador>
        <hr />
        <button onClick={() => setMostrar(!mostrar)}>
          {mostrar ? "Ocultar info" : "Mostrar info"}
        </button>

        {mostrar && <p>¡Aquí está la operación oculta!</p>}
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
