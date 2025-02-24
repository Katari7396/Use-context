import React from 'react'
import ComponentC from './task3'

function ComponentB(props) {
  return (
    <div className='box'>
      <h1>ComponentB</h1>
      <ComponentC user={props.user}/>
    </div>
  )
}

export default ComponentB