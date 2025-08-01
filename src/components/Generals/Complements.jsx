/**
 * 
 * @param {clase} ternario  
 * @param {funcion} callback 
 * @param {texto} string 
 * 
 */

const Boton = ({clase, funcion, texto})=>{
    return <button className={clase} onClick={funcion}>{texto}</button>
}

const Strong = ({texto, clase})=>{
    return <strong className={clase}>{texto}</strong>
}

const NavItems = ({texto, enlace, clase})=>{
    return <li><a className={clase} href={enlace}>{texto}</a></li>
}

const Image = ({url, comment})=> <img src={url} alt={comment} />


export {Boton, Strong, NavItems, Image}