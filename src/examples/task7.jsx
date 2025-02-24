import React from 'react'
import Child from './task8'

function Parent(props) {
  return (
    <div>
        <h1>Parent</h1>
        <Child user = {props.user}/>
    </div>
  )
}

export default Parent
