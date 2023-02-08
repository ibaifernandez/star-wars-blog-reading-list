import React from "react";
import Characters from "../component/Characters.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx";

const Home = () => {
    return (
        <>
            <h1 className="h1 w-75 mx-auto mt-3">Star Wars' Characters</h1>
            <Characters />
            <h1 className="h1 w-75 mx-auto mt-3">Star Wars' Planets</h1>
            <Planets />
            <h1 className="h1 w-75 mx-auto mt-3">Star Wars' Vehicles</h1>
            <Vehicles />
        </>
    );
};

export default Home;
