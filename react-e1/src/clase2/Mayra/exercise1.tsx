
interface SaludoProp{
    nombre:string
}
function Saludo ({nombre}:SaludoProp) {
    return(
        <h3> Hola {nombre}</h3>
    )
}

export default Saludo