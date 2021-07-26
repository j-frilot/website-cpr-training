import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
    return (
        <Container className="p-5">
            <h3 className="text-center display-4">
                Have Questions? Contact Us!
            </h3>
            <Form
                className="contact-form"
                action="https://formspree.io/f/moqpoywe"
                method="POST"
                role="form"
            >
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form.Group className="form-floating">
                            <Form.Control
                                type="text"
                                className="form-control form-control-lg"
                                id="floatingName"
                                name="Name"
                                placeholder="Name"
                                required
                            />
                            <Form.Label htmlFor="floatingName">Name</Form.Label>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form.Group className="form-floating">
                            <Form.Control
                                type="text"
                                className="form-control form-control-lg"
                                id="floatingphone"
                                name="Phone Number"
                                placeholder="Phone"
                            />
                            <Form.Label htmlFor="floatingphone">
                                Phone
                            </Form.Label>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="form-floating">
                            <Form.Control
                                type="text"
                                className="form-control form-control-lg"
                                id="floatingemail"
                                name="_replyto"
                                placeholder="Email"
                                required
                            />
                            <Form.Label htmlFor="floatingemail">
                                Email
                            </Form.Label>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="form-floating">
                            <Form.Control
                                className="form-control"
                                rows="8"
                                placeholder="Message"
                                id="floatingtextarea"
                                name="message"
                                required
                            ></Form.Control>
                            <Form.Label htmlFor="floatingtextarea">
                                Message
                            </Form.Label>
                        </Form.Group>
                    </Col>
                </Row>

                <div className="text-center my-3">
                    <Button type="submit" variant="dark" size="lg">
                        Send
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default ContactForm;
