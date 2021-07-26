import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = () => {
    return (
        <main>
            <section className="jumbotron home-jumbo">
                <Container className="mx-auto align-items-center">
                    <div className="text-light d-flex flex-column align-items-center  text-center pt-5 fw-bolder jumbo-inner">
                        <h2 className="py-3 text-danger display-5 fw-bold">
                            American Heart Association Approved
                        </h2>
                        <h3 className="py-3 display-3 fw-bold">
                            CPR, BLS, & AED Training
                        </h3>
                        <Link
                            to="/book"
                            className="py-2 px-3 fs-5 bg-danger border border-2 rounded"
                        >
                            Book your class
                        </Link>

                        <Image
                            src="https://res.cloudinary.com/dsip2gx3i/image/upload/v1622776594/CPR%20-%20Calibras/logo-ama-1.png"
                            alt="ama-approved"
                            className="mt-3"
                            fluid
                            rounded
                        />
                    </div>
                </Container>
            </section>

            <Container className="products p-5">
                <h2 className="text-center display-2 fw-bold py-2">
                    Our Offerings
                </h2>
                <Row className="g-4 text-center ">
                    <ProductCard
                        image="https://res.cloudinary.com/dsip2gx3i/image/upload/v1623699422/CPR%20-%20Calibras/mannequin-3.jpg"
                        title="First Aid CPR/AED"
                        list_one="Teachers"
                        list_two="Fitness/Health Trainers"
                        list_three="All Hospital Staff"
                        list_four="Sports Coaches"
                    />

                    <ProductCard
                        image="https://res.cloudinary.com/dsip2gx3i/image/upload/v1623699422/CPR%20-%20Calibras/mannequin-2.jpg"
                        title="BLS CPR/AED"
                        list_one="All Medical Personnel"
                        list_two="Nursing & medical Students"
                        list_three="Physical Therapy Students"
                        list_four="Hospital Employees"
                    />

                    <ProductCard
                        image="https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_430,w_430/v1623696211/CPR%20-%20Calibras/mannequin-4.jpg"
                        title="Infant CPR"
                        list_one="New Parents"
                        list_two="Nursing & medical Students"
                        list_three="Daycare Providers"
                        list_four="Babysitters/Nannies"
                    />
                </Row>

                <Row className="g-4 text-center ">
                    <ProductCard
                        image="https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_430,w_430/v1622567866/CPR%20-%20Calibras/mannequin-1.jpg"
                        text="We also train groups."
                    />

                    <ProductCard
                        image="https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_430,w_430/v1622567866/CPR%20-%20Calibras/mannequin-1.jpg"
                        text="We will travel to you for CPR and First Aid training. Contact us today to schedule a
                                    class that works with your schedule."
                    />

                    <ProductCard
                        image="https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,h_430,w_430/v1623696334/CPR%20-%20Calibras/certification.jpg"
                        text="CPR Certification cards available for immediate print."
                    />
                </Row>
            </Container>
        </main>
    );
};

export default Home;
