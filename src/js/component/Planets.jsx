import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Luke from "../../img/luke-skywalker.jpeg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/")
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                console.log("The response was successful!");
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
                console.log("Looks like there was a problem: \n", error);
            });
    }, []);

    return (
        <div className="mx-auto w-75 bg-light my-3 p-3 d-flex overflow-auto">
            {planets.map(({ name }, i) => (
                <Card key={name} className="my-card">
                    <Card.Img
                        variant="top"
                        src={
                            i === 0
                                ? `https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png`
                                : `https://starwars-visualguide.com/assets/img/planets/${
                                      i + 1
                                  }.jpg`
                        }
                    />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Something, something</Card.Text>
                        <div className="d-flex justify-content-between">
                            <Button
                                variant="primary"
                                onClick={() => navigate("/luke")}
                            >
                                Take me elsewhere
                            </Button>
                            <Button
                                variant="outline-danger"
                                // onClick={() => navigate("/search")}
                            >
                                ❤️
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Planets;
