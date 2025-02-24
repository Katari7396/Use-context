import React from 'react'
import { useState } from 'react';
import CountChild from './task5';

function CountParent () {

    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
      setCounter(counter + 1);
    };

    const decrementCounter = () => {
      setCounter(counter - 1);
    };

    const resetCounter = () => {
      setCounter(0);
    };
  
  return (
    <div>
      <CountChild counter={counter} increment={incrementCounter}
                                    decrement={decrementCounter} 
                                    reset = {resetCounter}/>
    </div>
  )
}

export default CountParent
