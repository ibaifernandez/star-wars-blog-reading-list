import React, { useState, useEffect, useContext } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router";

import FavoritesContext from "../context/FavoritesContext.jsx";
import Heartbutton from "./Heartbutton.jsx"; // Revisar importacion (cuidad con mayus y minisculas)

const fetchCharacters = () => {
    const [characters, setCharacters] = useState([]);

    const navigate = useNavigate();

    const { addToFavorites, deleteFromFavorites, isActive } =
        useContext(FavoritesContext);

    console.log(isActive);

    const getCharacters = async () => {
        try {
            const response = await fetch("https://swapi.dev/api/people/");
            const data = await response.json();
            setCharacters(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className="mx-auto w-75 my-3 d-flex overflow-auto">
            {characters.map((character, id) => (
                <Card key={id} className="my-card">
                    <Card.Img
                        variant="top"
                        src={`https://starwars-visualguide.com/assets/img/characters/${
                            id + 1
                        }.jpg`}
                    />
                    <Card.Body>
                        <Card.Title>
                            <strong>{character.name}</strong>
                        </Card.Title>
                        <Container fluid className="p-0 my-3">
                            <Card.Text as="div">
                                <ListGroup>
                                    <ListGroup.Item>
                                        <strong>Height</strong>:{" "}
                                        {character.height}: cm.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Weight</strong>:{" "}
                                        {character.mass} kg.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Birth Year</strong>:{" "}
                                        {character.birth_year}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Container>
                        <Container className="d-flex justify-content-between p-0">
                            <Button
                                variant="primary"
                                onClick={() =>
                                    navigate(`/CharacterConstructor/${id + 1}`)
                                }
                            >
                                More on {character.name}
                            </Button>
                            <Heartbutton
                                name={character.name}
                                uid={id}
                                category="character"
                                addToFavorites={addToFavorites}
                                deleteFromFavorites={deleteFromFavorites}
                                isActive={isActive}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default fetchCharacters;
