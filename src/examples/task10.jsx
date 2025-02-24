import React, { useState } from 'react'
import Button from './task11';

const ThemeContext = React.createContext();

function ThemeProvider () {

    const [theme, setTheme] = useState('white');

  return (
    <div>

        <ThemeContext.Provider value={{theme,setTheme}}>

        <div className='box' style={{backgroundColor: theme === 'white' ? 'white' : 'black'}}>

            <Button />

        </div>
        
        </ThemeContext.Provider>
        
    </div>
  )
}

export default ThemeProvider;
export {ThemeContext}
