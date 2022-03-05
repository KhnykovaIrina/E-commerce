import React from "react";
import './scss/ProductSizes.scss';
import {Container, Button} from "react-bootstrap";

const ProductSizes = ({ option }) => {
	return (
			<Container className="text-center">
				<ul>
					{option.map((size) => (
							<UlSize key={size.value} size={size}/>
					))}
				</ul>
			</Container>
	)
}

function UlSize(props) {
	const size = props.size;
	return (

			<li className="sizeX">

				<Button variant="outline-secondary" className="rounded-0 start"
				        style={{color: "black", textAlign: "center", width: 55, height: 55, fontSize: 20}}
				>{size.label}</Button>

			</li>
	);
}

export default ProductSizes;
