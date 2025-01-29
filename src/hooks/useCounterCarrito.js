import { useState } from "react";


export const useCounterCarrito = (valorInicial) => {

    const [counter, setCounter] = useState(0);


    const incrementar = (modificarCarrito, id) => {

        setCounter(counter + 1); 
        modificarCarrito(id, nuevoValor)
    }

    const decrementar = (modificarCarrito, id) => {

        if(counter == 0) return;
        setCounter(counter - 1);
        modificarCarrito(id, counter)
    }

    const reset = (modificarCarrito, id) => {
        setCounter(0);
        modificarCarrito(id, counter)
    }


    return {

        counter,
        incrementar,
        decrementar,
        reset,


    }

}
