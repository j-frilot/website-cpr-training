import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
    return (
        <Col md={4}>
            <div className="card p-3 my-2 bg-light rounded">
                <Card.Img variant="top" src={`${props.image}`} />
                <Card.Body>
                    <Card.Title>
                        <h3 className="fw-bold fs-2">{props.title}</h3>
                    </Card.Title>
                    <Card.Text>
                        <ul>
                            <li className="py-1 fw-bold">{props.list_one}</li>
                            <li className="py-1 fw-bold">{props.list_two}</li>
                            <li className="py-1 fw-bold">{props.list_three}</li>
                            <li className="py-1 fw-bold">{props.list_four}</li>
                        </ul>
                        <p class="fw-bold">{props.text}</p>
                    </Card.Text>
                    <Link to="/book" className="btn btn-danger mt-3">
                        Schedule Now
                    </Link>
                </Card.Body>
            </div>
        </Col>
    );
};

export default ProductCard;
