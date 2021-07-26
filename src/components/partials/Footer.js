import React from "react";
import Footerbox from "./Footerbox";
import {
    PinMapFill,
    TelephoneInboundFill,
    EnvelopeFill
} from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className="bg-danger">
            <div className="footer-banner"></div>
            <div className="container">
                <div className="row py-5 text-light text-center">
                    <Footerbox
                        title="Calebra's Heart"
                        path_one="/"
                        link_one="Home"
                        path_two="/about"
                        link_two="About"
                        path_three="/contact"
                        link_three="Contact Us"
                        path_four="/book"
                        link_four="Book Now"
                    />
                    <Footerbox
                        title="Quick Links"
                        path_one="/terms"
                        link_one="Booking Policy"
                        path_two="/terms"
                        link_two="Refund Policy"
                        path_five="https://www.heart.org/"
                        link_five="American Heart association"
                    />

                    <div className="col-md-4 ">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <PinMapFill />
                                1317 W. Airline Hwy. Laplace, La 70068
                            </li>

                            <li>
                                <TelephoneInboundFill />
                                <a
                                    href="tel:504-858-3697"
                                    target="_blank"
                                    className="bar-link"
                                    rel="noreferrer"
                                >
                                    1-504-858-3697
                                </a>
                            </li>

                            <li>
                                <EnvelopeFill />
                                <a
                                    href="mailto:calebrasheartcpr@gmail.com"
                                    className="bar-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    calebrasheartcpr@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-dark footer-bar">
                <div className="container text-light d-flex justify-content-between align-items-center">
                    <p>&copy; 2021 Calebra's Heart LLC</p>
                    <a
                        href="https://joshuafrilot.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>MelloManDesigns</p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
