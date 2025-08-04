import { NavItems } from "../Generals/Complements"
import "./Footer.css"

const FooterSection = ()=>{
    return(
        <div className="div-foot">
            <small>&copy; Todos los derechos Reservados</small>
            <ul>
            <NavItems enlace="mailto:shoppingGym2025@gmail.com?&body=%27hola%27" texto="Enviar consulta"/>
            <NavItems enlace="https://www.adidas.com.ar/" texto="Marcas Representacíon"/>
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