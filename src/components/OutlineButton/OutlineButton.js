import React from "react"
import './scss/OutlineButton.scss'
import {Button, Container} from "react-bootstrap";

const OutlineButton = (props) => {
	const text = props.text;
	return (
			<Container className="text-center">
				<div className="btn">
					<Button className="rounded-0" variant="outline-dark"
					        style={{fontSize: 25}}
					>{text}</Button>
				</div>
			</Container>
	);
};

export default OutlineButton;

