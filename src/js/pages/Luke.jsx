import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Luke = () => {
    const [characterInfo, setCharacterInfo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/1")
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                console.log("The response was successful!");
                return response.json();
            })
            .then((thisResponse) => {
                // console.log(thisResponse);
                setCharacterInfo(thisResponse.result);
            })
            .catch((error) => {
                console.log("Looks like there was a problem: \n", error);
            });
    }, []);

    console.log(characterInfo);
    console.log(characterInfo.height);

    return (
        <div className="container-fluid">
            <div className="w-75 bg-light mx-auto my-3 p-3">
                <div className="row">
                    <div className="col-9 me-5">
                        <h1>Luke Skywalker</h1>
                        <p className="lead mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores itaque nesciunt suscipit alias
                            architecto voluptates fuga cupiditate, accusamus
                            exercitationem, expedita non perferendis error autem
                            neque reiciendis, minus iusto? Minima, natus.
                        </p>
                        <ul className="list-group d-flex flex-row flex-wrap mt-5">
                            <li className="list-group-item">
                                <div className="bold">Birth Year</div>
                                {/* <div>{whatINeed.birth_year}</div> */}
                            </li>
                            <li className="list-group-item d-flex flex-column justify-content-between">
                                <div className="bold">Height</div>
                                {/* <div>{height} cm.</div> */}
                            </li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">
                                Porta ac consectetur ac
                            </li>
                            <li className="list-group-item">
                                Vestibulum at eros
                            </li>
                            <li className="list-group-item">
                                Vestibulum at eros
                            </li>
                            <li className="list-group-item">
                                Vestibulum at eros
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <img
                            className="d-flex ms-auto "
                            src={`https://starwars-visualguide.com/assets/img/characters/${characterInfo.uid}.jpg`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Luke;
