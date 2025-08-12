import { useState } from "react"
import  {BotonSimple, Strong, NavItems}  from "../Generals/Complements"
import "./Header.css"


const HeaderNav = ()=>{
    return(
        <div className="nav-items">
            <p className="logo"><Strong texto="Gym"/></p>
            <nav>
            <ul>
            <NavItems enlace="/" texto="Home"/>
            <NavItems clase="bi bi-cart" enlace="/productos" texto=" Productos"/>
            </ul>
            </nav>
        </div>
    )
}

const HeaderHero = ()=>{
    const [change, setChange] = useState(true)
    const ChangeBtn = ()=> setChange(!change)
    return(
        <div className="Header-hero">
            <h1>Shopping-<Strong texto="Gym" /></h1>
            <BotonSimple clase={change ? "touch" : "no-touch"} callback={ChangeBtn} text={change ? "Comenzamos?" : "A entrenar!!"}/>
        </div>
    )
}

const Header = ()=>{
    return (
        <header>
            <HeaderNav/>
            <HeaderHero/>
        </header>
    )
}


export  {Header, NavItems}