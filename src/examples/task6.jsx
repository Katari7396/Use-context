import React from 'react'
import Parent from './task7'

function GrandParent() {

    const user = {name:"katari", age: 25}

  return (
    <div>
        <h1>GrandParent</h1>
        <Parent user = {user}/>
    </div>
  )
}

export default GrandParent
