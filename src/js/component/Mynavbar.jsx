import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Mynavbar() {
    const [favoriteNumber, setFavoriteNumber] = useState(2);
    const [favoriteContent, setFavoriteContent] = useState("");

    const UserFavoriteNumber = () => {
        if (favoriteNumber === 0) {
            useEffect(() => {
                setFavoriteContent("Empty");
            }, []);
            return;
        } else {
            return (
                <span className="bg-danger px-2 py-1 mx-1 rounded-circle">
                    {favoriteNumber}
                </span>
            );
        }
    };

    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            navigate("/search");
        }
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
                        width="128"
                        height="72"
                        alt="Star Wars Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 mh-100"
                        navbarScroll
                    ></Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onKeyDown={handleSearch}
                        />
                        <Button
                            variant="outline-success"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </Form>

                    <Dropdown className="ms-3">
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Favorites {UserFavoriteNumber()}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>{favoriteContent}</Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Mynavbar;
