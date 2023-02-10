import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import FetchVehicles from "../component/FetchVehicles.jsx";

const VehicleConstructor = () => {
    const [vehicleProperties, setVehicleProperties] = useState([]);
    const navigate = useNavigate();
    const { vehicleID } = useParams();
    // console.log(vehicleID);

    const fetchVehiclesProperties = () => {
        fetch(`https://www.swapi.tech/api/vehicles/${vehicleID}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // console.log("The response was successful!");
                return response.json();
            })
            .then((thisResponse) => {
                // console.log(thisResponse.result);
                setVehicleProperties(thisResponse.result.properties);
            })
            .catch((error) => {
                // console.log("Looks like there was a problem: \n", error);
            });
    };

    console.log(vehicleProperties);

    useEffect(() => fetchVehiclesProperties(), [vehicleID]);

    const {
        name,
        model,
        vehicle_class,
        manufacturer,
        cost_in_credits,
        length,
        crew,
        passengers,
    } = vehicleProperties;

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
                                <li className="list-group-item d-flex flex-column justify-content-between">
                                    <div className="bold">Model</div>
                                    <div>{model}</div>
                                </li>
                                <li className="list-group-item d-flex flex-column justify-content-between">
                                    <div className="bold">Vehicle Class</div>
                                    <div>{vehicle_class}</div>
                                </li>
                                <li className="list-group-item d-flex flex-column justify-content-between">
                                    <div className="bold">Manufacturer</div>
                                    <div>{manufacturer}</div>
                                </li>
                            </div>
                            <li className="list-group-item d-block flex-column justify-content-between w-100 mt-3">
                                <div className="bold">Features</div>
                                <div>
                                    The {name} costs {cost_in_credits} credits.
                                    Its length is {length} meters, and it fits{" "}
                                    {crew} crew members and {passengers}{" "}
                                    passengers.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img
                        className="w-35"
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleID}.jpg`}
                    />
                </div>
            </section>
            <aside className="mx-auto my-3">
                <h2 className="h2 text-center bold medium">
                    Other vehicles you may wanna see
                </h2>
                <FetchVehicles />
            </aside>
        </>
    );
};
export default VehicleConstructor;
