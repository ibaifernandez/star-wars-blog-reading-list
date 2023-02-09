import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import FetchPlanets from "../component/FetchPlanets.jsx";
import placeholder from "../../img/placeholder.jpeg";

const PlanetConstructor = () => {
    const [planetProperties, setPlanetProperties] = useState([]);
    const navigate = useNavigate();
    const { planetID } = useParams();
    console.log(planetID);

    const fetchPlanetProperties = () => {
        fetch(`https://www.swapi.tech/api/planets/${planetID}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // console.log("The response was successful!");
                return response.json();
            })
            .then((thisResponse) => {
                // console.log(thisResponse);
                setPlanetProperties(thisResponse.result.properties);
            })
            .catch((error) => {
                // console.log("Looks like there was a problem: \n", error);
            });
    };

    useEffect(() => fetchPlanetProperties(), []);

    console.log(planetProperties);
    // console.log(charactersUid);

    const {
        name,
        diameter,
        rotation_period,
        orbital_period,
        gravity,
        population,
        climate,
        terrain,
        surface_water,
    } = planetProperties;

    // const { uid } = charactersUid;

    return (
        <>
            <section className="container-fluid bg-light w-75 mx-auto my-3 p-3">
                <div className="row">
                    <div className="w-65 d-flex flex-column justify-content-between">
                        <h1 className="big">{name}</h1>
                        <p className="lead mt-3 fs-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores itaque nesciunt suscipit alias
                            architecto voluptates fuga cupiditate, accusamus
                            exercitationem, expedita non perferendis error autem
                            neque reiciendis, minus iusto? Minima, natus.
                        </p>
                        <ul className="list-group d-flex justify-content-between mt-5">
                            <div className="d-flex flex-row justify-content-between">
                                <li className="list-group-item d-flex flex-column justify-content-between w-25">
                                    <div className="bold">Diameter</div>
                                    <div>{diameter} km.</div>
                                </li>
                                <li className="list-group-item d-flex flex-column justify-content-between w-25">
                                    <div className="bold">Rotation Period</div>
                                    <div>{rotation_period} hours</div>
                                </li>
                                <li className="list-group-item d-flex flex-column justify-content-between w-25">
                                    <div className="bold">Orbital Period</div>
                                    <div>{orbital_period} months</div>
                                </li>
                            </div>
                            <li className="list-group-item d-block flex-column justify-content-between w-100 mt-3">
                                <div className="bold">Features</div>
                                <div>
                                    <ul>
                                        <li>
                                            <strong>Gravity</strong>: {gravity}{" "}
                                            m/s<sup>2</sup>
                                        </li>
                                        <li>
                                            <strong>Population</strong>:{" "}
                                            {population} inhabitants
                                        </li>
                                        <li>
                                            <strong>Climate</strong>: {climate}
                                        </li>
                                        <li>
                                            <strong>Terrain</strong>: {terrain}
                                        </li>
                                        <li>
                                            <strong>Water Surface</strong>:{" "}
                                            {surface_water}
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img
                        className="w-35"
                        src={`https://starwars-visualguide.com/assets/img/planets/${planetID}.jpg`}
                        onError={(e) => {
                            e.target.onError = null;
                            e.target.src = placeholder;
                        }}
                    />
                </div>
            </section>
            <aside className="mx-auto my-3">
                <h2 className="h2 text-center bold medium">
                    Other planets you may wanna see
                </h2>
                <FetchPlanets />
            </aside>
        </>
    );
};
export default PlanetConstructor;
