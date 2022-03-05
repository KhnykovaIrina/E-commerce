import React from "react";
import "./scss/ShoppingCartButton.scss";
import {Button, Container} from "react-bootstrap";

const ShoppingCartButton = (props) => {
	const text = props.text;
	const disabled = props.disabled;

	return (
			<Container className="text-center">
				<Button variant="dark" className="rounded-0"
				        style={{fontSize: 25, width: 400, height:70}}
				        disabled={disabled}>{text}
				</Button>
			</Container>
	);
};

export default ShoppingCartButton;