import { NavItems } from "../Generals/Complements"
import "./Footer.css"

const FooterSection = ()=>{
    return(
        <div className="div-foot">
            <small>&copy; Todos los derechos Reservados</small>
            <ul>
            <NavItems enlace="./index" texto="Enviar consulta"/>
            <NavItems enlace="./index" texto="Soporte"/>
            <NavItems enlace="./index" texto="Marcas Representacíon"/>
            </ul>
        </div>
    )
}
const Footer =()=>{
    return(
        <footer>
            <FooterSection/>
        </footer>
    )
}

export default Footer