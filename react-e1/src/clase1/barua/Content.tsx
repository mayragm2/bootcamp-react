import Saludar from "./Saludar"
import TarjetaPerfil from "./TarjetaPerfil"
import './ClassOne.css'

function Content() {
    return(
        <div className="flex">
            <section className="aaaj">
                <Saludar/>
            </section>
            <section className="info">
                <TarjetaPerfil/>
            </section>
        </div>
    )
}

export default Content 