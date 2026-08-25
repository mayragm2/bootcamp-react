interface TarjetaProps {
  nombre: string;
  precio: number;
  stock: number;
}

function TarjetaProducto({ nombre, precio, stock }: TarjetaProps) {
  return <h1>El producto {nombre}! Cuesta tan solo {precio}!!! Compre ya que solo quedan {stock}!!!!</h1>;
}

export default TarjetaProducto 