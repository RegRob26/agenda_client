import React from 'react';
import Navbar from '@/components/common/navbar/navbar.jsx';
import BottomNabvar from '@/components/common/bottom navbar/bottomNabvar.jsx';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <>
            <Navbar/>
            <div className="pt-6 md:pt-12">
                <Outlet />
            </div>
            <div className='pt-12 md:hidden'>
                <BottomNabvar />
            </div>
        </>
    );
}

export default Layout;