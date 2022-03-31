import React from 'react'
import {Button, Container} from "react-bootstrap";
import "./BlueButton.css";

const BlueButton = (props) => {
	const text = props.text;
	return (
			<Container>
				<Button variant='primary' className="rounded-0 blue"
				        style={{fontSize: 25}}
				>{text}</Button>
			</Container>
	);
};

export default BlueButton;
