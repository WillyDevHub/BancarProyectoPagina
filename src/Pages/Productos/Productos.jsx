import { Boton, Strong } from "../../components/Generals/Complements"
import producto from "../../data/Productos.json"
import "./Productos.css"
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
        {producto.map(({id, article, price, image, calification})=>
        <div key={id} className="Card">
                <CardBody image={image} article={article} price={price} calification={calification}/>
                <Boton texto="Comprar" funcion={()=> alert("Compra " + article)}/>
        </div>
        )}
        </div>
    )
}

export default Productos