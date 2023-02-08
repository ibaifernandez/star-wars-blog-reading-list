import React from "react";
import { Outlet } from "react-router-dom";
import Mynavbar from "../component/Mynavbar.jsx";
import Footer from "../component/Footer.jsx";

const Layout = () => {
    return (
        <>
            <Mynavbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
