import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../src/Footer/Footer'

const AuthLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;