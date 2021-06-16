import React from "react";
import Image from "react-bootstrap/Image";

const Topbar = () => {
    return (
        <div className="top-bar bg-dark py-1">
            <ul className="container mx-auto d-flex justify-content-evenly align-items-center">
                <li>
                    <Image
                        src="https://res.cloudinary.com/dsip2gx3i/image/upload/v1622776594/CPR%20-%20Calibras/logo-ama-1.png"
                        alt="ama-approved"
                        width="120px"
                        fluid
                        rounded
                    />
                </li>
                <li>
                    <a
                        href="https://calebras-heart.square.site/?fbclid=IwAR0hJ6biCnAjjEwTi8pddg313t-niDE9c4Eyp3bhk5uD4r4yMx-EyPliq-o"
                        className="text-light px-2 bar-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fas fa-calendar-alt"></i>
                        Schedule
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:calebrasheartcpr@gmail.com"
                        className="text-light px-2"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fas fa-mail-bulk"></i>{" "}
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
                        <i className="fas fa-phone"></i>
                        1-504-858-3697
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Topbar;
