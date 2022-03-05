import React from 'react'
import {Button, Container} from "react-bootstrap";
import "./scss/BlueButton.scss";

const BlueButton = (props) => {
	const text = props.text;

	return (
			<Container className="text-center">
				<Button variant='primary' className="rounded-0 blue"
				        style={{fontSize: 25}}
				>{text}</Button>
			</Container>
	);
};

export default BlueButton;
