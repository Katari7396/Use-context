import React from 'react'

function Child(props) {
  return (
    <div>
      <p>NAME : {props.name}</p>
      <p>AGE : {props.age}</p>
    </div>
  )
}

export default Child
