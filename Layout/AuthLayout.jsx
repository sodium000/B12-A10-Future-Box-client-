import React from 'react';
import Navbar from '../src/NavBar/Navbars'
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;