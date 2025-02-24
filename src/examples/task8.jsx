import React from 'react'
import GrandChild from './task9'

function Child (props) {
  return (
    <div>
        <h1>Child</h1>
        <GrandChild user={props.user}/>
    </div>
  )
}

export default Child