import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import CharacterConstructor from "./pages/CharacterConstructor.jsx";
import VehicleConstructor from "./pages/VehicleConstructor.jsx";
import PlanetConstructor from "./pages/PlanetConstructor.jsx";
import Search from "./pages/Search.jsx";

import "../styles/index.css";

const App = () => {
    // const [charactersUid, setCharactersUid] = useState(0);
    // const fetchCharactersUid = () => {
    //     fetch(`https://www.swapi.tech/api/people/`)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             return response.json();
    //         })
    //         .then((thisResponse) => {
    //             console.log(thisResponse.results);
    //             setCharactersUid(thisResponse.results);
    //         })
    //         .catch((error) => {
    //             console.log("Looks like there was a problem: \n", error);
    //         });
    // };

    // useEffect(() => fetchCharactersUid(), []);

    // const [planetsUid, setPlanetsUid] = useState(0);
    // const fetchPlanetsUid = () => {
    //     fetch(`https://www.swapi.tech/api/planets/`)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             // console.log("The response was successful!");
    //             return response.json();
    //         })
    //         .then((thisResponse) => {
    //             console.log(thisResponse.results);
    //             setPlanetsUid(thisResponse.results);
    //         })
    //         .catch((error) => {
    //             console.log("Looks like there was a problem: \n", error);
    //         });
    // };

    // useEffect(() => fetchPlanetsUid(), []);

    // const [vehiclesUid, setVehiclesUid] = useState(0);
    // const fetchVehiclesUid = () => {
    //     fetch(`https://www.swapi.tech/api/vehicles/`)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             // console.log("The response was successful!");
    //             return response.json();
    //         })
    //         .then((thisResponse) => {
    //             console.log(thisResponse.results);
    //             setVehiclesUid(thisResponse.results);
    //         })
    //         .catch((error) => {
    //             console.log("Looks like there was a problem: \n", error);
    //         });
    // };

    // useEffect(() => fetchVehiclesUid(), []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="CharacterConstructor/:characterID"
                        element={<CharacterConstructor />}
                    />
                    <Route
                        path="VehicleConstructor/:vehicleID"
                        element={<VehicleConstructor />}
                    />
                    <Route
                        path="PlanetConstructor/:planetID"
                        element={<PlanetConstructor />}
                    />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.querySelector("#app"));
