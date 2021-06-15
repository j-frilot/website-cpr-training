import React from "react";
import { Link } from "react-router-dom";

const Footerbox = (props) => {
    return (
        <div className="col-md-4 col-lg-4">
            <h4>{props.title}</h4>
            <ul>
                <li>
                    <Link to={`${props.path_one}`}>{props.link_one}</Link>
                </li>
                <li>
                    <Link to={`${props.path_two}`}>{props.link_two}</Link>
                </li>
                <li>
                    <Link to={`${props.path_three}`}>{props.link_three}</Link>
                </li>
                <li>
                    <Link to={`${props.path_four}`}>{props.link_four}</Link>
                </li>
            </ul>
        </div>
    );
};

export default Footerbox;
