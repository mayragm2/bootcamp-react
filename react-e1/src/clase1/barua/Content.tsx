import Saludar from "./Saludar"
import TarjetaPerfil from "./TarjetaPerfil"
import "./ClassOne.css"

function Content() {
    return (
        <div className="content-layout">
            <section className="highlight-panel">
                <Saludar />
            </section>
            <section className="information-card">
                <TarjetaPerfil nombre="aaaj" info="mucha info de aaaj" foto="imagen de aaaj" />
            </section>
            <section className="information-card">
                <TarjetaPerfil nombre="no se" info="mucha info" foto="imagen" esFavorito={true} />
            </section>
            <section className="information-card">
                <TarjetaPerfil nombre="bruno logs" info="mucha info de APIs" foto="imagen de bruno" />
            </section>
        </div>
    )
}

export default Content 