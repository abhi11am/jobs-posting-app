import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
  });

  useEffect(() => {
    localStorage.setItem('token', authState.token);
    localStorage.setItem('user', JSON.stringify(authState.user));
  }, [authState]);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
        email,
        password,
      });

      const { token, user } = response.data.data;
      setAuthState({ token, user });

      return {
        status: true,
        redirect: (user.role === 'ADMIN') ? '/admin/jobs' : '/user/jobs',
        message: response.data.status.message
      }
    }
    catch (err) {
      return {
        status: false,
        message: err.response.data.status.message
      }
    }
  }

  const logout = () => {
    setAuthState({ toke: null, user: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  const isAuthenticated = () => {
    return authState.token && authState.user;
  }

  return <AuthContext.Provider value={{ authState, login, logout, isAuthenticated }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}