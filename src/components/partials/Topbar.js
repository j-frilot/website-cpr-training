import React from "react";
import { Link } from "react-router-dom";

import {
    CalendarDate,
    TelephoneInboundFill,
    EnvelopeFill,
    CardChecklist
} from "react-bootstrap-icons";

const Topbar = () => {
    return (
        <div className="top-bar bg-dark py-1">
            <ul className="container mx-auto d-flex justify-content-evenly align-items-center">
                <li>
                    <Link to="/terms" className="text-light">
                        <CardChecklist className="fs-4" />
                        Booking Policy
                    </Link>
                </li>
                <li>
                    <a
                        href="https://calebras-heart.square.site/?fbclid=IwAR0hJ6biCnAjjEwTi8pddg313t-niDE9c4Eyp3bhk5uD4r4yMx-EyPliq-o"
                        className="text-light px-2 bar-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CalendarDate className="fs-4" /> Schedule
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:calebrasheartcpr@gmail.com"
                        className="text-light px-2"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <EnvelopeFill className="fs-4" />{" "}
                        calebrasheartcpr@gmail.com
                    </a>
                </li>
                <li>
                    <a
                        href="tel:504-858-3697"
                        target="_blank"
                        rel="noreferrer"
                        className="text-light px-2"
                    >
                        <TelephoneInboundFill className="fs-4" /> 1-504-858-3697
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Topbar;
