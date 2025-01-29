import { useState } from "react";


export const useCounter = (valorInicial) => {

    const [counter, setCounter] = useState(valorInicial);


    const incrementar = () => {

        setCounter(counter + 1); 
        //setCounter( (c) => c + 1 )
    }

    const decrementar = () => {

        if(counter == 0) return;
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(valorInicial);
    }

    return {

        counter,
        incrementar,
        decrementar,
        reset,


    }

}
