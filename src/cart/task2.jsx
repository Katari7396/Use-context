// src/components/ColorSelector.js
import React, { useContext } from 'react';
import { ColorContext } from './task1';


// ColorSelector component to switch between colors
const ColorSelector = () => {
  const { changeColor } = useContext(ColorContext); // Access context to get changeColor function

  return (
    <div>
      <h3>Choose a background color:</h3>
      <button onClick={() => changeColor('red')}>Red</button>
      <button onClick={() => changeColor('blue')}>Blue</button>
      <button onClick={() => changeColor('green')}>Green</button>
      <button onClick={() => changeColor('yellow')}>Yellow</button>
    </div>
  );
};

export default ColorSelector;
