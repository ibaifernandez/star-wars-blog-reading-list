import React from "react";
import FetchCharacters from "../component/FetchCharacters.jsx";
import FetchPlanets from "../component/FetchPlanets.jsx";
import FetchVehicles from "../component/FetchVehicles.jsx";

const Home = () => {
    return (
        <>
            <h1 className="h1 w-75 mx-auto mt-3">Star Wars' Characters</h1>
            <FetchCharacters />
            <h1 className="h1 w-75 mx-auto mt-3">Star Wars' Planets</h1>
            <FetchPlanets />
            <h1 className="h1 w-75 mx-auto mt-3">Star Wars' Vehicles</h1>
            <FetchVehicles />
        </>
    );
};

export default Home;
