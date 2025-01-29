import { useState } from "react";

export const CounterApp = () => {

const [counter, setCounter] = useState({

    counter1: 10,
    counter2: 20,
    counter3: 30,



});

const {counter1, counter2, counter3} = counter;


  return (
    <>
    
        <h2>counter1: {counter1}</h2>
        <h2>counter2: {counter2}</h2>
        <h2>counter3: {counter3}</h2>

        <button onClick={ (e) => { setCounter({
            ...counter,
            counter1: counter1 + 1,
         
        })}}>+1</button>

    </>
 
  )
}
