import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">
                    &copy; 2022 Ibai Fernández, Inc.
                </p>

                <a
                    href="/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                >
                    <img
                        className=""
                        width="128"
                        height="72"
                        src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
                    />
                </a>
                {location.pathname === "/" ? null : (
                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item">
                            <a href="/" className="nav-link px-2 text-muted">
                                Go back to the beginning
                            </a>
                        </li>
                    </ul>
                )}
            </footer>
        </div>
    );
};

export default Footer;
