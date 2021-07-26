import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="danger" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Brand
                href="index.html"
                className="d-md-none d-lg-none d-block fs-2 d-flex align-items-center"
            >
                <h1 className="fw-bold">Calebra's Heart</h1>
                <Image
                    src="https://res.cloudinary.com/dsip2gx3i/image/upload/v1622776589/CPR%20-%20Calibras/logo-dark.png"
                    alt="heart"
                    width="120px"
                    fluid
                />
            </Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                    as="ul"
                    className="mx-auto fs-5 fw-bolder align-items-center"
                >
                    <Nav.Item as="li" className="px-3">
                        <Link to="/" className="text-light">
                            Homes
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="px-3">
                        <Link to="/about" className="text-light">
                            About Calebra's
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="d-none d-md-flex">
                        <Link to="/" className="px-3">
                            <div className="d-flex align-items-center ">
                                <h1 className="fw-bold text-light">
                                    Calebra's Heart
                                </h1>
                                <Image
                                    src="https://res.cloudinary.com/dsip2gx3i/image/upload/v1622776589/CPR%20-%20Calibras/logo-dark.png"
                                    alt="heart"
                                    width="120px"
                                    fluid
                                />
                            </div>
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="px-3">
                        <Link to="/contact" className="text-light">
                            Contact Us
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="px-3">
                        <Link to="/book" className="text-light">
                            Book Now
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
