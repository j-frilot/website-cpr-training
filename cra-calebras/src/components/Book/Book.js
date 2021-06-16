import React, { useState, useEffect } from "react";
import Jumbotron from "../partials/Jumbotron";
import Container from "react-bootstrap/Container";

const Book = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(
            "https://square.site/appointments/buyer/widget/ewe7vqeto5h4dn/LD91QMJZ61CSM.js"
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setOrder(res);
            });
    }, []);

    return (
        <main>
            <Jumbotron title="Ready To Learn?" />
            <Container>
                <div className="square-frame">{order}</div>
            </Container>
        </main>
    );
};

export default Book;
