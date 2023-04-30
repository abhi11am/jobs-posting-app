import { useAuth } from 'contexts/auth';
import React from 'react'
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to='/login' />
  }

  return children;
}

export default RequireAuth
