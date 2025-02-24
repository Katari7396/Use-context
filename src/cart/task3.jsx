// src/App.js
import React, { useContext } from 'react';
import { ColorContext, ColorProvider } from './task1';
import ColorSelector from './task2';


const App = () => {
  const { change } = useContext(ColorContext); // Access color from context

  return (
    <ColorProvider>
      <div
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: change, // Set the background color dynamically
          height: '100vh', // Make sure it covers the full screen height
        }}
      >
        <h1>Color Change Example</h1>
        <ColorSelector />
        <div style={{ marginTop: '20px', padding: '50px' }}>
          <p>Click a color button to change the background color!</p>
        </div>
      </div>
    </ColorProvider>
  );
};

export default App;
