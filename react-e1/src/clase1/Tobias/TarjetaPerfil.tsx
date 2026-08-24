interface TarjetaPerfilProps {
  nombre: string;
  descripcion: string;
  imagen: string;
}

const TarjetaPerfil = (props: TarjetaPerfilProps) => {
    return (
     <div>  
        <h1 className= "title">{props.nombre}</h1>
        <p>{props.descripcion}</p>
        <img className="logoPipa" src={props.imagen} alt="Logo" />
     </div>
    )
}
export default TarjetaPerfil 