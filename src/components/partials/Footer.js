import React from 'react';
import Footerbox from './Footerbox';
import {
	PinMapFill,
	TelephoneInboundFill,
	EnvelopeFill,
} from 'react-bootstrap-icons';

const Footer = () => {
	return (
		<footer className="bg-danger">
			<div className="footer-banner"></div>
			<div className="container">
				<div className="row py-5 text-light text-center">
					<Footerbox
						title="CPR Training"
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
								1234 W. Main St Buette, Mt. 21168
							</li>

							<li>
								<TelephoneInboundFill />
								<a
									href="tel:555-555-5555"
									target="_blank"
									className="bar-link"
									rel="noreferrer"
								>
									1-555-555-5555
								</a>
							</li>

							<li>
								<EnvelopeFill />
								<a
									href="mailto:cprtraining@email.com"
									className="bar-link"
									target="_blank"
									rel="noreferrer"
								>
									cprtraining@email.com
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="bg-dark footer-bar">
				<div className="container text-light d-flex justify-content-between align-items-center">
					<p>&copy; 2021 CPR Training</p>
					<a
						href="https://joshuafrilot.com/"
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
