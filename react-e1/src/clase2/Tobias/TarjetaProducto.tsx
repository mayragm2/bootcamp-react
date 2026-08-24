interface TarjetaProductoProps {
  nombre: string;
  precio: number;
  stock: number;
}

function TarjetaProducto({ nombre, precio, stock }: TarjetaProductoProps) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Stock: {stock}</p>
    </div>
  );
}

export default TarjetaProducto;