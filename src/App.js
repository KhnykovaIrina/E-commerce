import React from "react";
import {Container} from "react-bootstrap";
import BlueButton from "./components/BlueButton";
import ProductSizes from "./components/ProductSizes";

function App() {
	return (
			<Container>
				<BlueButton text="Buy Now"/>
				<ProductSizes/>
			</Container>
	);
}

export default App;

