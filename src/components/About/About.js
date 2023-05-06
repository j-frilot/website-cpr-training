import React from 'react';
import Jumbotron from '../partials/Jumbotron';
import AboutBoxes from './AboutBoxes';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { BookmarkCheckFill } from 'react-bootstrap-icons';

const About = () => {
	return (
		<main>
			<Jumbotron title="About CPR Training" />
			<Container className="p-5">
				<Row className="text-center">
					<AboutBoxes
						icon=<BookmarkCheckFill className="display-2" />
						title="Certified Instructor"
						text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laudantium illo ducimus esse est doloribus
                                natusreprehenderit cum deserunt, maxime nemo commodi voluptatem adipisci ad."
					/>

					<AboutBoxes
						icon=<BookmarkCheckFill className="display-2" />
						title="Our Mission"
						text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laudantium illo ducimus esse est doloribus
                                natusreprehenderit cum deserunt, maxime nemo commodi voluptatem adipisci ad."
					/>

					<AboutBoxes
						icon=<BookmarkCheckFill className="display-2" />
						title="Certified Instructor"
						text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla laudantium illo ducimus esse est doloribus
                                natusreprehenderit cum deserunt, maxime nemo commodi voluptatem adipisci ad."
					/>
				</Row>
			</Container>
			<Container className="p-5">
				<Row>
					<Col md={7}>
						<h2 className="text-dark fs-1">
							Lorem ipsum dolor sit amet.
						</h2>
						<p className="fw-bold">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Porro odit possimus quaerat atque, facere ad
							dolore cum, vel ipsam eius voluptatibus delectus
							quod harum soluta repellat est ut, ipsum ea
							reprehenderit dolorem labore? Iste voluptates
							corporis, id libero est optio alias possimus
							quibusdam iure ipsum repellendus ad veniam similique
							nesciunt. Ad consequatur maxime consectetur unde
							autem totam necessitatibus numquam tempore.
						</p>
						<p className="fw-bold">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Inventore quasi nisi delectus doloremque
							culpa, odio omnis ratione aliquid voluptas
							blanditiis earum tenetur facilis sed quos vel
							dignissimos eveniet molestiae distinctio
							consectetur! Tenetur, nostrum? Nobis aliquid sequi
							odit autem nam nesciunt?
						</p>
					</Col>
					<Col md={5} className="text-center">
						<Image
							src="https://res.cloudinary.com/dsip2gx3i/image/upload/c_crop,h_550,w_500,x_0,y_250/v1622567864/CPR%20-%20Calibras/calebra.jpg"
							alt="cpr logo"
							rounded
							fluid
						/>
					</Col>
				</Row>
			</Container>
		</main>
	);
};

export default About;
