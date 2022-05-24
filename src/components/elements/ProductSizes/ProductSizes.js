import React from "react";
import './ProductSizes.css';
import { Container, Button } from "react-bootstrap";

const ProductSizes = (props) => {
	const { attribute } = props
	
	return (
		<div>
			{(attribute.property === "size") && <UlSize size={attribute.value} />}
		</div>
	)
}

function UlSize(props) {
	const { size } = props;
	return (
		<Button variant="outline-secondary" className="rounded-0 start me-2"
			style={{ color: "black", textAlign: "center", height: 55, fontSize: 20 }}
		>{size}</Button>
	);
}

export default ProductSizes;
