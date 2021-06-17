import React from "react";
import Jumbotron from "../partials/Jumbotron";
import AboutBoxes from "./AboutBoxes";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import { BookmarkCheckFill } from "react-bootstrap-icons";

const About = () => {
    return (
        <main>
            <Jumbotron title="About Calebra's" />
            <Container className="p-5">
                <Row className="text-center">
                    <AboutBoxes
                        icon=<BookmarkCheckFill className="display-2" />
                        title="Certified Instructor"
                        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laudantium illo ducimus esse est doloribus
                                natusreprehenderit cum deserunt, maxime nemo commodi voluptatem adipisci ad."
                    />

                    <AboutBoxes
                        icon=<BookmarkCheckFill className="display-2" />
                        title="Our Mission"
                        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laudantium illo ducimus esse est doloribus
                                natusreprehenderit cum deserunt, maxime nemo commodi voluptatem adipisci ad."
                    />

                    <AboutBoxes
                        icon=<BookmarkCheckFill className="display-2" />
                        title="Certified Instructor"
                        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laudantium illo ducimus esse est doloribus
                                natusreprehenderit cum deserunt, maxime nemo commodi voluptatem adipisci ad."
                    />
                </Row>
            </Container>
            <Container className="p-5">
                <Row>
                    <Col md={7}>
                        <h2 className="text-dark fs-1">
                            In Loving Memory Of Calebra
                        </h2>
                        <p className="fw-bold">
                            Back in 2007 my mom suffered with CHF which resulted
                            in her having a stroke while we were in a mall
                            shopping. No one preformed CPR, nor was my siblings
                            or I knowledgeable enough to do it. No oxygen was
                            delivered or chest compressions until EMT arrived on
                            scene minutes later. It resulted in her becoming
                            brain dead and after a week of life support ,she
                            passed away. As I learned more, it immediately
                            spiked my interest in the medical Field. I knew from
                            that day I wanted to be apart of saving lives. As a
                            certified AHA BLS Instructor I want to honor my mom
                            by teaching you a simple but important skill that
                            can help you save a life.
                        </p>
                        <p className="fw-bold">
                            CPR is a universal skill that everyone should know
                            and be certified. No matter your age or job title
                            The AHA does not mandate a minimum age requirement
                            for learning CPR. Give you or your loved one the
                            gift of a life saving skill. This is a 3-4hour class
                            where you learn how to turn up your life saving
                            skills.
                        </p>
                    </Col>
                    <Col md={5} className="text-center">
                        <Image
                            src="https://res.cloudinary.com/dsip2gx3i/image/upload/c_crop,h_550,w_500,x_0,y_250/v1622567864/CPR%20-%20Calibras/calebra.jpg"
                            alt="calebra"
                            rounded
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default About;
