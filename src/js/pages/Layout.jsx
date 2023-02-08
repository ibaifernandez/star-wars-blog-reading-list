import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "../component/MyNavbar.jsx";
import Footer from "../component/Footer.jsx";

const Layout = () => {
    return (
        <>
            <MyNavbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
