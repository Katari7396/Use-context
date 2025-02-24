import React, { useContext } from 'react'
import { ThemeContext } from './task10';

function Button() {
  
  const {theme, setTheme} = useContext(ThemeContext);
  
  const handleClick = () => {
    if(theme==="white"){
      setTheme('dark')
    }else {
      setTheme('white')
    }
  }

  return (
    <div>

      <button className='btn' onClick={handleClick}>CLICK ME</button>
      
    </div>
  )
}

export default Button