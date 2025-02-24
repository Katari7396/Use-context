import React from 'react'

function CountChild (props) {
  
  return (

    <div>

      <h1>Current Counter: {props.counter} ⏲️ </h1>

      <button onClick={props.increment}>Increment</button>

      <button onClick={props.decrement}>Decrement</button>

      <button onClick={props.reset}>RESET</button>

    </div>
  )
}

export default CountChild
