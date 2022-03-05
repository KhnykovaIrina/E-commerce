import React from "react";
import {Button, Container} from "react-bootstrap";
import './scss/ProductSizes.scss';

function ProductSizes() {
	const size = [
		{value: 1, label: "XS"},
		{value: 2, label: "S"},
		{value: 3, label: "M"},
		{value: 4, label: "L"},
		{value: 5, label: "XL"},
		{value: 6, label: "XXL"},
		{value: 7, label: "3XL"},
	];

	return (
			<Container className="text-center">
				<ul>
					{size.map((size) => (
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
				        style={{color: "black", textAlign: "center"}}
				>{size.label}</Button>
			</li>
	);
}

export default ProductSizes;
