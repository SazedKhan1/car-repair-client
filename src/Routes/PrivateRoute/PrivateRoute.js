import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext)
   if (loading) {
      <h2 className='text-5xl'> loading....</h2>
   }
   if (user) {
      return children;
   }
   return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;