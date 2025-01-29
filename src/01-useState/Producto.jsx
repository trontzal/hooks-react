import { useCounterCarrito } from "../hooks/useCounterCarrito";

export const Producto = ({id, nombre, precio, modificarCarrito}) => {

    const { counter, incrementar, decrementar, reset } = useCounterCarrito();

  return (
    <section className="producto">
      <h1>{nombre}</h1>
      <p>Cantidad: {counter}</p>
      <button onClick={() => incrementar(modificarCarrito, id)}>+1</button>
      <button onClick={() => reset(modificarCarrito, id)}>reset</button>
      <button onClick={() => decrementar(modificarCarrito, id)}>-1</button>

    </section>
  )
}
