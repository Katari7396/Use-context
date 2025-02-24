import React, { useState } from 'react'
import ComponentB from './task2'

function ComponentA() {
  
  const [user] = useState("Katari");

  return (
    <div className='box'>
        <h1>ComponentA</h1>
        <h2>{`HELLO ${user}`}</h2>
        <ComponentB user={user}/>
      
    </div>
  )
}

export default ComponentA
