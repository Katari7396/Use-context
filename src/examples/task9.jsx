import React from 'react'

function GrandChild (props) {
  return (
    <div>
        <h1>GrandChild</h1>
        <p>NAME : {props.user.name}</p>
        <p>AGE : {props.user.age}</p>
    </div>
  )
}

export default GrandChild 
