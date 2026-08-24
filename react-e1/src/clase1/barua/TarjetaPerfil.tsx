interface TarjetaProps {
  info: string;
  nombre: string;
  foto: string;
  esFavorito?: boolean;
}

function TarjetaPerfil( {info, foto, nombre, esFavorito}: TarjetaProps) {
    return(
        <div>
            <h1>{nombre}:</h1>
            <p>{info}.</p>
            <img src={foto}></img>
            <p>{esFavorito}</p>
        </div>
    ) 
}

export default TarjetaPerfil