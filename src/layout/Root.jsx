import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>

            {/* Outlet */}
            <Outlet></Outlet>
            
            {/* Footer */}
        </div>
    );
};

export default Root;