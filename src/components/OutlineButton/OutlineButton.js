import React from "react"
import './scss/OutlineButton.scss'
import {Button, Container} from "react-bootstrap";

const OutlineButton = (props) => {
	const text = props.text;
	return (
			<Container>
				<Button className="rounded-0" variant="outline-dark"
				        style={{fontSize: 25}}
				>{text}</Button>
			</Container>
	);
};

export default OutlineButton;

