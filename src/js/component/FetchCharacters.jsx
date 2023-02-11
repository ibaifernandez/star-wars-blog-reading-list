import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FavoritesContext from "../context/FavoritesContext.jsx";
import Heartbutton from "./Heartbutton.jsx";

const fetchCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    const { addToFavorites, deleteFromFavorites } =
        useContext(FavoritesContext);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/")
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // console.log("The response was successful!");
                return response.json();
            })
            .then((thisResponse) => {
                setCharacters(
                    thisResponse.results.map((item) => {
                        return item;
                    })
                );
            })
            .catch((error) => {
                // console.log("Looks like there was a problem: \n", error);
            });
    }, []);

    // console.log(characters);

    const [charactersData, setCharactersData] = useState([]);

    return (
        <div className="mx-auto w-75 my-3 d-flex overflow-auto">
            {characters.map(({ name, uid }) => (
                <Card key={name} className="my-card">
                    <Card.Img
                        variant="top"
                        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                    />

                    {/* 3.- Dentro de la Card, useEffect que haga el fetch de la URL que me aporta los datos que quiero mostrar */}
                    {/* 4.- Y con esa data ya puede setear X datos del personaje que mostrar donde quiero mostrar */}
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {/* <ul>
                                {miniData.map(
                                    ({ height, mass, birth_year }, i) => (
                                        <>
                                            <li key={height}>{height}</li>
                                            <li key={mass}>{mass}</li>
                                            <li key={birth_year}>
                                                {birth_year}
                                            </li>
                                        </>
                                    )
                                )}
                            </ul> */}
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                            <Button
                                variant="primary"
                                onClick={() =>
                                    navigate(`/CharacterConstructor/${uid}`)
                                }
                            >
                                More on {name}
                            </Button>
                            <Heartbutton
                                name={name}
                                uid={uid}
                                addToFavorites={addToFavorites}
                                deleteFromFavorites={deleteFromFavorites}
                            />
                            {/* <Button
                                variant="outline-danger rounded"
                                onClick={() => {
                                    addToFavorites(name, uid);
                                }}
                            >
                                ❤️
                            </Button> */}
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default fetchCharacters;
