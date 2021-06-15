import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Jumbotron = (props) => {
    return (
        <section class="jumbotron about-jumbo">
            <Container class="jumbotron-content">
                <h2 class="pt-3 text-center display-3 fw-bold text-light">
                    {props.title}
                </h2>
            </Container>
        </section>
    );
};

export default Jumbotron;
