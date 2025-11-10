import React, { use } from 'react';
import AuthContext from '../../src/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading} = use(AuthContext)

          if (loading) {
        return (<div className='h-screen flex justify-center items-center'>
            <span className="loading loading-spinner text-success"></span>
        </div>)
    }

     if (user && user?.email) {
        return( <>
            {children}
        </>);
    }

    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoutes;