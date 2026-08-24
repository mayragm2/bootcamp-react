interface TarjetaProps {
  nombre: string;
  precio: number;
  stock: number;
}

function TarjetaPerfil({ nombre, precio, stock }: TarjetaProps) {
  return <h1>El producto {nombre}! Cuesta tan solo {precio}!!! Compre ya que solo quedan {stock}!!!!</h1>;
}

export default TarjetaPerfil