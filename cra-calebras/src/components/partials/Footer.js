import React from "react";
import Footerbox from "./Footerbox";

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
                        path_one="/"
                        link_one="Booking Policy"
                        link_two="Lorem, ipsum dolor."
                        path_three="https://cpr.heart.org/en"
                        link_three="American Heart Association"
                        link_four="Lorem, ipsum dolor."
                    />

                    <div className="col-md-4 ">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-pin-map"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                                    />
                                </svg>{" "}
                                1317 W. Airline Hwy. Laplace, La 70068
                            </li>

                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-telephone-inbound"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-envelope"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                </svg>
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
                <div className="container text-light d-flex justify-content-lg-between align-items-center">
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
