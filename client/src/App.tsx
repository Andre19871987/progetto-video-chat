import { useContext, useEffect, useState } from 'react';
import Router from './Router';
import { User } from './types/entities';
import { LoginContext } from './contexts/LoginContext';

const getSessionUser = () => {
  const loggedUser = sessionStorage.getItem('loggedUser');
  return loggedUser ? (JSON.parse(loggedUser) as User) : null;
};

const saveSessionUser = (loggedUser: User) => {
  return sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser));
};

const removeSessionUser = () => {
  return sessionStorage.removeItem('loggedUser');
};

export default function App() {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  useEffect(() => {
    if (loggedUser) {
      saveSessionUser(loggedUser);
    } else {
      removeSessionUser();
    }
  }, [loggedUser]);

  return (
    <LoginContext.Provider value={{ loggedUser, setLoggedUser }}>
      <Router />
    </LoginContext.Provider>
  );
}
