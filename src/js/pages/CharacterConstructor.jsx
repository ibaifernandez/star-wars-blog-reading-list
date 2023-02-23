import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchCharacters from "../component/FetchCharacters.jsx";

const CharacterConstructor = () => {
    const [characterProperties, setCharacterProperties] = useState([]);

    const { characterID } = useParams();
    console.log(characterID);

    const fetchCharactersProperties = () => {
        fetch(`https://www.swapi.tech/api/people/${characterID}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // console.log("The response was successful!");
                return response.json();
            })
            .then((thisResponse) => {
                // console.log(thisResponse);
                setCharacterProperties(thisResponse.result.properties);
                console.log(thisResponse.result.properties);
            })
            .catch((error) => {
                // console.log("Looks like there was a problem: \n", error);
            });
    };

    useEffect(() => fetchCharactersProperties(), [characterID]);

    console.log(characterProperties);
    // console.log(charactersUid);

    const { name, height, mass, eye_color, hair_color, birth_year, gender } =
        characterProperties;

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
                                    <div className="bold">Birth Year</div>
                                    <div>{birth_year}</div>
                                </li>
                                <li className="list-group-item d-flex flex-column justify-content-between w-25">
                                    <div className="bold">Height</div>
                                    <div>{height} cm.</div>
                                </li>
                                <li className="list-group-item d-flex flex-column justify-content-between w-25">
                                    <div className="bold">Mass</div>
                                    <div>{mass} kg.</div>
                                </li>
                            </div>
                            <li className="list-group-item d-block flex-column justify-content-between w-100 mt-3">
                                <div className="bold">Features</div>
                                <div>
                                    {gender === "male" ? "His " : "Her "}
                                    eyes are <strong>
                                        {eye_color}
                                    </strong> and{" "}
                                    {gender === "male" ? "his " : "her "} hair
                                    is <strong>{hair_color}</strong>.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img
                        className="w-35"
                        src={`https://starwars-visualguide.com/assets/img/characters/${characterID}.jpg`}
                    />
                </div>
            </section>
            <aside className="mx-auto my-3">
                <h2 className="h2 text-center bold medium">
                    Other characters you may wanna see
                </h2>
                <FetchCharacters />
            </aside>
        </>
    );
};
export default CharacterConstructor;
