import React from "react";
import "./scss/ShoppingCartButton.scss";
import {Button, Container} from "react-bootstrap";

const ShoppingCartButton = (props) => {
	const text = props.text;
	const disabled = props.disabled;

	return (
			<Container className="text-center">
				<div>
					<Button variant="dark" className="rounded-0 btnAdd"
					        style={{fontSize: 25, fontFamily: "-moz-initial"}}
					        disabled={disabled}>{text}
					</Button>
				</div>
			</Container>
	);
};

export default ShoppingCartButton;