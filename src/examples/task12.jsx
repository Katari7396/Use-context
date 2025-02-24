import React, { createContext, useState } from 'react';
import Component2 from './task13';

const UserContext = createContext();

function Component1() {

  const [user] = useState("BUNNY");

  return (
    <UserContext.Provider value={user}>

      <h1>{`HELLO ${user} 😊`}</h1>

      <Component2/>

    </UserContext.Provider>
  )
}

export default Component1

export {UserContext}
