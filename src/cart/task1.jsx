// src/context/ColorContext.js
import React, { createContext, useState } from 'react';

// 1. Create the Color Context
const ColorContext = createContext();

// 2. Create the ColorProvider component
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('white'); // Default color is white

  const changeColor = (newColor) => {
    setColor(newColor); // Function to change the color
  };

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext };

