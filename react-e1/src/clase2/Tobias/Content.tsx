import Saludo from "./Saludo";
import TarjetaProducto from "./TarjetaProducto";

function Content() {
    return (
        <div>
            <section>
                <Saludo nombre="Tobiassss" />
                <Saludo nombre="Santiagoo" />
                <Saludo nombre="Mayraaaaa" />
            </section>
            
            <section>
                <TarjetaProducto nombre="Producto 1" precio={100} stock={10} />
                <TarjetaProducto nombre="Producto 2" precio={200} stock={5} />
            </section>
        </div>

    );

}

export default Content;