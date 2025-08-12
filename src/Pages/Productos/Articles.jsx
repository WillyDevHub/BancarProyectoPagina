import { Boton, NavItems, Strong } from "../../components/Generals/Complements"
import articles from "../../data/Productos.json"
import "./Articles.css"
import Carrito from "../compra/Compra"
const Productos = ()=>{
    return(
        <>
        <h2 className="title-productos">Articulos 20% Descuento <Strong clase="bi bi-cart"/></h2>
        <Card/>
        </>
    )
}

const CardBody = ({article, price, image, calification})=>{
    return(
        <>
        <h2>{article}</h2> 
        <img src={image} alt={article} />
        <div className="div-container-info"><Strong clase="bi bi-hand-thumbs-up" texto={"⭐".repeat(calification)}/></div>
        <p><Strong texto="Precio: "/>${price}</p>   
        </>
    )
}

const Card = ()=>{
    return(
        <div className="container-cart">
        {articles.map(({id, article, price, image, calification})=>
        <div key={id} className="Card">
                <CardBody image={image} article={article} price={price} calification={calification}/>
                <NavItems texto="Comprar" enlace={`/tienda/${id}`}/>
        </div>
        )}
        </div>
    )
}

export default Productos