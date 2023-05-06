import React from 'react';
import Contactbox from './Contactbox';
import ContactForm from './ContactForm';
import Jumbotron from '../partials/Jumbotron';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import {
	PinMapFill,
	TelephoneInboundFill,
	EnvelopeFill,
} from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';

const Contact = () => {
	return (
		<main>
			<Jumbotron title="Contact Us" />
			<Container className="p-5">
				<h3 className="text-center display-4">We're Local</h3>
				<Row>
					<Col md={4} className="">
						<ul
							className="d-flex flex-column align-items-center justify-content-between text-center fs-5   contact-box rounded"
							style={{ height: 300 }}
						>
							<Contactbox
								icon=<PinMapFill className="display-4" />
								text="1234 W Main St. Buette, Mt 21168"
							/>

							<Contactbox
								icon=<TelephoneInboundFill className="display-4" />
								text="1-555-555-5555"
							/>
							<Contactbox
								icon=<EnvelopeFill className="display-4" />
								text="cprtraining@email.com"
							/>
						</ul>
					</Col>
					<Col md={8}></Col>
				</Row>
			</Container>
			<ContactForm />
		</main>
	);
};

export default Contact;
