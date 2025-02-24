import React from 'react'

function ComponentC(props) {
  return (
    <div className='box'>
        <h1>ComponentC</h1>
        <h2>{`BYE ${props.user}`}</h2>
      
    </div>
  )
}

export default ComponentC

