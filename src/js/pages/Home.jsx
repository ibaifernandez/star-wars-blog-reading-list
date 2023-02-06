import React from "react";

import favicon from "../../img/favicon.jpeg";

const Home = () => {
    return (
        <>
            <img className="d-block my-3 mx-auto" src={favicon} />
            <div className="text-center mx">
                <span className="fs-6">
                    If Font Awesome are active, you should see a hand here 👉🏽{" "}
                </span>
                <i className="far fa-hand ms-3"></i>
                <span className="mx-3 fs-3">Hello React!</span>
                <i className="far fa-hand me-3"></i>
                <span className="fs-6">
                    👈🏽 If Font Awesome are active, you should see a hand here{" "}
                </span>
            </div>
        </>
    );
};

export default Home;
