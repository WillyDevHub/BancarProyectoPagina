import { useParams } from "react-router-dom"
import "./Compra.css";
import { Image, Boton, Strong, NavItems } from "../../components/Generals/Complements";
import { useEffect, useState } from "react";
import Productos from "../../data/Productos.json";


const PanelProducto = ({ title, enlace }) => {
  return (
    <div className="panel-article">
      <h2>{title}</h2>
      <Image url={enlace} comment={title} />
    </div>
  );
};

const PanelCompra = ({ title, info }) => {
  const [counter, setCounter] = useState(()=>{
    const saved = localStorage.getItem('carritoCompra');
    return saved !== "" ? parseInt(saved) : 0
  });
  const [total, setTotal] = useState(()=>{
    const save = localStorage.getItem("precioTotal");
    return save !== "" ? parseInt(save) : 0
  });

  useEffect(()=>{
    localStorage.setItem("carritoCompra", counter.toString())
  },[counter])

  useEffect(()=>{
    localStorage.setItem("precioTotal", total.toString())
  },[total])
  
  const addCart = () => {
    setCounter(add => add + 1);
    setTotal(increm => increm += info);
  };
  const removeCart = () => {
    setCounter((add) => (add > 0 ? add - 1 : 0));
    setTotal(price => price > 0 ? price -= info: 0)
  }
  const deletes = () => {
    setCounter(0)
    setTotal(0)
  };
  return (
    <div className="panel-compra">
      <h2>{title}</h2>
      <p><Strong texto="Precio: $"/>{info}</p>
      <p>{counter > 0 ? `Se añadio ${counter} ${title} al carrito` : "no hay nada" }</p>
      <p className="unid-info">{counter} unidad Precio-Final ${total}</p>
      <Boton callback={addCart} texto="añadir" />
      <Boton activo={counter === 0} callback={removeCart} texto="quitar" />
      <Boton activo={counter === 0} callback={deletes}  texto="limpiar" />
    </div>
  );
};

const Carrito = () => {
   const {id} = useParams();
   const ProduductosFilter = Productos.filter(el => el.id === id)
  return (
    <>
        {ProduductosFilter.map((items) => (
      <div key={items.id} className="controll-panel">
          <PanelProducto title={items.article} enlace={items.image}/>
          <PanelCompra title={items.article} info={items.price} />
      </div>
        ))}
    </>

  );
};

export default Carrito;
