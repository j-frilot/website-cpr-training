import React from 'react';
import Jumbotron from './partials/Jumbotron';
import Container from 'react-bootstrap/Container';

const Terms = () => {
	return (
		<main>
			<Jumbotron title="Terms and Conditions" />
			<Container className="p-5 text-center">
				<ul>
					<li>
						<h3>Visits are by appointment only</h3>
						<p> No walk-INS </p>
					</li>
					<li>
						<h3>Covid-19 Policy</h3>
						<p>
							We still follow covid guidelines!!!! Mask REQUIRED
							Temp is required at the door during check-in Gloves
							are worn during hands -on training ***If you show
							active signs/symptoms you will be ask to KINDLY
							LEAVE. (No refunds) however your class will be moved
							to another date or you can opp for blended learning
							and complete the hands-on portion in person to
							receive your certification.{' '}
						</p>
					</li>
					<li>
						<h3>Late Policy</h3>
						<p>
							If you KNOW you'll be late CALL IN ADVANCED 15 min
							GRACE Period Anything after the class door is locked
							and you will be Canceled! Be conscious that your
							slot could have been book to someone else so we do
							not offer REfUNDS! Your class is rescheduled to
							another date within 30days. Anything after you will
							lose your payment and have to REPAY IN FULL.
						</p>
					</li>
					<li>
						<h3>Deposits are non-refundable</h3>
						<p>
							IF YOU PAID IN FULL AND CANCEL at a MAX of 5 days
							before YOU WILL RECEIVE HALF BACK LAST MINUTE
							CANCELS will Forfeit YOUR FULL PAYMENT and Blocked
							from further services
						</p>
					</li>
					<li>
						<h3>ALL classes are subject to recording.</h3>
					</li>
					<li className="py-2">
						<h2>Thank YOU for choosing CPR Training</h2>
					</li>
				</ul>
			</Container>
		</main>
	);
};

export default Terms;
