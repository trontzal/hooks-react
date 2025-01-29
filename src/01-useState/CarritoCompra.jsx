import { useState } from "react"
import { productos } from "../data/productos"
import { Producto } from "./Producto"





export const CarritoCompra = () => {

  const [carrito, setCarrito] = useState({})

  const modificarCarrito = (id, cantidad) => {

    setCarrito({...carrito, [id]:cantidad})
  }

  return (

    <div className="contenedor-carrito">
      {
        productos.map( (producto)=>{
          return <Producto key={producto.id} id={producto.id} nombre = {producto.nombre} precio = {producto.pvp} modificarCarrito={modificarCarrito}/>
        })
      }

      <div className="mt-3">
        <button className="btn btn-success">Enviar pedido</button>
      </div>

    </div>


  )
}
