import './clase2.css'

interface TarjetaProps { 
    nombre: string;
    descripcion: string;
    url: string;
}

function TarjetaPerfil ({nombre, descripcion, url}: TarjetaProps) {
    return (
        < div className = "cardDisplay">
        <div className="card">
            <h3>{nombre}</h3>
            <img src={url} alt="foto de gustavo cerati" />
            <p>{descripcion}</p>
        </div>
        </div>
    )

}

export default TarjetaPerfil



