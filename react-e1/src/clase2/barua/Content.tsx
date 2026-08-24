import Saludar from "./Saludo"
import TarjetaPerfil from "./TarjetaProducto"
import './ClassTwo.css'

function Content() {
    return (
        <div className="flex">
            <section className="aaaj">
                <Saludar nombre="Raul" />
            </section>
            <section className="aaaj">
                <Saludar nombre="Juan" />
            </section>
            <section className="aaaj">
                <Saludar nombre="Aaaj!!!!" />
            </section>
            <section className="info">
                <TarjetaPerfil nombre="Carta pokemon" precio={16000} stock={2}/>
            </section>
            <section className="info">
                <TarjetaPerfil nombre="Remera termica" precio={200000} stock={10}/>
            </section>
        </div>
    )
}

export default Content 