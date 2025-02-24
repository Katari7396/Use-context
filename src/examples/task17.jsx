import React, { createContext, useState } from 'react';
import App from './task18';

export const AuthContext = createContext();

const Auth = () => {
    
    const [user, setUser] = useState(null);
    const login = (username) => setUser({ username });
    const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <App/>
    </AuthContext.Provider>
  );
};

export default Auth;
