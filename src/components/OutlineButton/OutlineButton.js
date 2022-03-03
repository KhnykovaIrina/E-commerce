import React from "react";
import "./OutlineButton.css";
import {Button} from "react-bootstrap";

const OutlineButton = (props) => {
	const text = props.text;
	return (
			<div className="btn">
				<Button className="rounded-0" variant="outline-dark">{text}</Button>
			</div>
	);
};

export default OutlineButton;

