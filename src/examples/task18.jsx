import React, { useContext } from 'react';
import { AuthContext } from './task17';

const Profile = () => {
  const { user } = useContext(AuthContext);
  return <h1>{user ? `WELCOME, ${user.username}` : 'Not logged in'}</h1>;
};

const LoginButton = () => {
  const { login } = useContext(AuthContext);
  return <button onClick={() => login('KATARI')}>Login</button>;
};

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  return <button onClick={logout}>Logout</button>;
};

const App = () => {

    return(
        <div>
            <Profile/>
            <LoginButton/>
            <LogoutButton/>
        </div>
    )

};

export default App;
