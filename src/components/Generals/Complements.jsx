/**
 * 
 * @param {clase} ternario  
 * @param {funcion} callback 
 * @param {texto} string 
 * 
 */

const Boton = ({callback, texto, activo, calcular})=>{
    return <button  disabled={activo} onClick={callback || calcular}>{texto}</button>
}

export const BotonSimple = ({clase, callback, text})=> <button className={clase} onClick={callback}>{text}</button>

const Strong = ({texto, clase})=>{
    return <strong className={clase}>{texto}</strong>
}

const NavItems = ({texto, enlace, clase, callback})=>{
    return <li><a onClick={callback} className={clase} href={enlace}>{texto}</a></li>
}

const Image = ({url, comment})=> <img src={url} alt={comment} />


export {Boton, Strong, NavItems, Image}