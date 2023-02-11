import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate, NavLink } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext.jsx";

const MyNavbar = () => {
    const navigate = useNavigate();

    const { favoritesList, favoritesListLength, deleteFromFavorites } =
        useContext(FavoritesContext);

    const handleSearchWithEnter = (e) => {
        if (e.key === "Enter") {
            navigate("/search");
        }
    };

    const handleSearchWithClick = (e) => {
        navigate("/search");
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 d-flex justify-content-between">
                        <div className="d-flex">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-item nav-link active"
                                        : "nav-item nav-link"
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="CharacterConstructor/1"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-item nav-link active"
                                        : "nav-item nav-link"
                                }
                            >
                                Characters
                            </NavLink>
                            <NavLink
                                to="PlanetConstructor/1"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-item nav-link active"
                                        : "nav-item nav-link"
                                }
                            >
                                Planets
                            </NavLink>
                            <NavLink
                                to="VehicleConstructor/1"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-item nav-link active"
                                        : "nav-item nav-link"
                                }
                            >
                                Vehicles
                            </NavLink>
                        </div>
                        <div className="d-flex me-5">
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onKeyDown={handleSearchWithEnter}
                                />
                                <Button
                                    variant="outline-success"
                                    onClick={handleSearchWithClick}
                                >
                                    Search
                                </Button>
                            </Form>

                            <Dropdown className="ms-3">
                                <Dropdown.Toggle
                                    variant="primary"
                                    id="dropdown-basic"
                                >
                                    Favorites
                                    {favoritesListLength === 0 ? (
                                        ""
                                    ) : (
                                        <span className="bg-danger px-2 py-1 mx-1 rounded-circle">
                                            {favoritesListLength}
                                        </span>
                                    )}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="p-1 my-overflow">
                                    {favoritesListLength === 0 ? (
                                        "Add some favorites to your reading list."
                                    ) : (
                                        <ul className="list-group list-group-flush">
                                            {favoritesList.map((item) => (
                                                <li
                                                    key={item}
                                                    className="list-group-item d-flex justify-content-between"
                                                >
                                                    {item.hero}
                                                    <button
                                                        className="ms-auto outline-danger"
                                                        onClick={() =>
                                                            deleteFromFavorites(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        ❌
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
