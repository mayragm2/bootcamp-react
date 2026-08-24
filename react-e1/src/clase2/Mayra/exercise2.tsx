interface TarjetaProductoProp{
nombre: string
precio: number
stock: number

}


function TarjetaProducto ({nombre, precio, stock}: TarjetaProductoProp){
    return(
    <div className="tarjeta-producto">
        <h5>{nombre}</h5>
        <h6>Precio: ${precio}</h6>
        <h6>Cantidad en Stock: {stock} unidades</h6>
    </div>
    )
}

export default TarjetaProducto