import React, { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  token: null,
  user: {},
  login: () => {},
  logOut: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const loginHandler = useCallback((token, userId, userName, userImage) => {
    if (token) {
      setIsAuthenticated(true);
      setToken(token);
      setUser({ userId, userName, userImage });
    } else {
      return new Error('Login Failed!');
    }
  }, []);

  const logOutHandler = () => {
    setIsAuthenticated(false);
    setToken(null);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuthenticated,
        token: token,
        user: user,
        login: loginHandler,
        logOut: logOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
