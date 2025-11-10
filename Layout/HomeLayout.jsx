import React from 'react';
import Navber from '../src/NavBar/Navbars'
import { Outlet } from 'react-router';
import Banner from '../src/BannerSection/Banner'

const HomeLayout = () => {
    return (
        <>
        <div>
            <Navber></Navber>
            <Banner></Banner>
        </div>
            <Outlet></Outlet>
        </>
    );
};

export default HomeLayout;