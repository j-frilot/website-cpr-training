import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const AboutBoxes = (props) => {
    return (
        <Col md={4}>
            <Card.Text>{props.icon}</Card.Text>

            <Card.Title>
                <h2 className="fw-bold">{props.title}</h2>
            </Card.Title>
            <Card.Text>
                <p>{props.text}</p>
            </Card.Text>
        </Col>
    );
};

export default AboutBoxes;
