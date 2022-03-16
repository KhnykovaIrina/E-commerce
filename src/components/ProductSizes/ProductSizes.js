import React from "react";
import './css/ProductSizes.css';
import {Container, Button} from "react-bootstrap";

const ProductSizes = ({option}) => {
	return (
			<Container>
				{option.map((size) => (
						<UlSize key={size.value} size={size}/>
				))}
			</Container>
	)
}

function UlSize(props) {
	const size = props.size;
	return (
			<div className="sizeX">
				<Button variant="outline-secondary" className="rounded-0 start"
				        style={{color: "black", textAlign: "center", width: 55, height: 55, fontSize: 20}}
				>{size.label}</Button>
			</div>
	);
}

export default ProductSizes;
