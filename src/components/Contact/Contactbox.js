import React from "react";

const Contactbox = (props) => {
    return (
        <li>
            <ul>
                <li>{props.icon}</li>
                <li>
                    <p>{props.text}</p>
                </li>
            </ul>
        </li>
    );
};

export default Contactbox;
