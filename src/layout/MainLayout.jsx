import React from 'react';
import Navbar from '../Components/Seared/Navbar/Navbar';
import Footer from '../Components/Seared/Footer/Footer';
import { Outlet } from 'react-router';
import { ClipLoader } from 'react-spinners';





const MainLayout = () => {

    return (
        <div>
            <Navbar />

            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;