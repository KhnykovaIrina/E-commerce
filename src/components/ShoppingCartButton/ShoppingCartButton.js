import React from "react";
import "./ShoppingCartButton.css";
import {Button} from "react-bootstrap";

const ShoppingCartButton = (props) => {
	const text = props.text;
	const disabled = props.disabled;
	const backgroundColor = props.backgroundColor;

	return (
			<div className="btnAdd">
				<Button variant="dark" className="rounded-0" style={{backgroundColor: backgroundColor}}
				        disabled={disabled}>{text}</Button>
			</div>
	);
};

export default ShoppingCartButton;

