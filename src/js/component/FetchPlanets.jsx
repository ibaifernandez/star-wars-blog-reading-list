import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import placeholder from "../../img/placeholder.jpeg";
import FavoritesContext from "../context/FavoritesContext.jsx";
import Heartbutton from "./Heartbutton.jsx";

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const navigate = useNavigate();

    const { addToFavorites, deleteFromFavorites } =
        useContext(FavoritesContext);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/")
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // console.log("The response was successful!");
                return response.json();
            })
            .then((thisResponse) => {
                setPlanets(
                    thisResponse.results.map((item) => {
                        return item;
                    })
                );
            })
            .catch((error) => {
                // console.log("Looks like there was a problem: \n", error);
            });
    }, []);

    return (
        <div className="mx-auto w-75 my-3 d-flex overflow-auto">
            {planets.map(({ name, uid }, i) => (
                <Card key={name} className="my-card">
                    <Card.Img
                        variant="top"
                        src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                        onError={(e) => {
                            e.target.onError = null;
                            e.target.src = placeholder;
                        }}
                    />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text></Card.Text>
                        <div className="d-flex justify-content-between">
                            <Button
                                variant="primary"
                                onClick={() =>
                                    navigate(`/PlanetConstructor/${uid}`)
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
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Planets;
