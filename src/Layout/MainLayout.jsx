import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/NavBar/Navbar';
import Footer from '../Pages/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-black min-h-screen text-gray-300'>
            <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
        </div>
    );
};

export default MainLayout;