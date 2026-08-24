import Saludar from "./Saludar"
import TarjetaPerfil from "./TarjetaPerfil"
import "./ClassOne.css"

function Content() {
    return (
        <div className="flex">
            <section className="aaaj">
                <Saludar />
            </section>
            <section className="info">
                <TarjetaPerfil nombre="aaaj" info="mucha info de aaaj" foto="imagen de aaaj" />
            </section>
            <section className="info">
                <TarjetaPerfil nombre="no se" info="mucha info" foto="imagen" esFavorito={true} />
            </section>
            <section className="info">
                <TarjetaPerfil nombre="bruno logs" info="mucha info de APIs" foto="imagen de bruno" />
            </section>
        </div>
    )
}

export default Content 