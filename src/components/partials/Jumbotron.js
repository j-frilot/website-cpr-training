import React from "react";
import Container from "react-bootstrap/Container";

const Jumbotron = (props) => {
    return (
        <section className="jumbotron about-jumbo">
            <Container className="jumbotron-content">
                <h2 className="pt-3 text-center display-3 fw-bold text-light">
                    {props.title}
                </h2>
            </Container>
        </section>
    );
};

export default Jumbotron;
