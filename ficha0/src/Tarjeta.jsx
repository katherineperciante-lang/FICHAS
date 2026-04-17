function Tarjeta(props) {
  return (
    <div>
      <h2 className="titulo">{props.nombre} </h2>
      <p className="sub"> {props.descripcion}</p>
      <br />

      <img className="img" src={props.url} alt="#" />
      <br />
      <a href={props.link}>Click acá</a>
    </div>
  );
}

export default Tarjeta;
