import React from "react";
import {Button, Container} from "react-bootstrap";
import './ProductSizes.css';

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
			<Container>
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
			<li className="hr">
				<Button variant="outline-secondary" id="start" className="rounded-0">{size.label}</Button>
			</li>
	);
}

export default ProductSizes;
