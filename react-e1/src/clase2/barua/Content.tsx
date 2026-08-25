import Saludo from "./Saludo"
import TarjetaProducto from "./TarjetaProducto"
import './ClassTwo.css'

function Content() {
    return (
        <div className="content-layout">
            <section className="highlight-panel">
                <Saludo nombre="Raul" />
            </section>
            <section className="highlight-panel">
                <Saludo nombre="Juan" />
            </section>
            <section className="highlight-panel">
                <Saludo nombre="Aaaj!!!!" />
            </section>
            <section className="information-card">
                <TarjetaProducto nombre="Carta pokemon" precio={16000} stock={2}/>
            </section>
            <section className="information-card">
                <TarjetaProducto nombre="Remera termica" precio={200000} stock={10}/>
            </section>
        </div>
    )
}

export default Content 