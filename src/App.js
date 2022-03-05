import React from "react";
import ShoppingCartButton from './components/ShoppingCartButton';
import ButtonOnColor from "./components/ButtonOnColor/ButtonOnColor";
import {Container} from "react-bootstrap";
import OutlineButton from './components/OutlineButton';
import BlueButton from "./components/BlueButton";
import ProductSizes from "./components/ProductSizes";

function App() {
	return (
			<Container className="text-center">
				<BlueButton text="Buy Now"/>
				<OutlineButton text="Shop All"/>
				<ShoppingCartButton text="Add to Cart - $250"/>
				<ShoppingCartButton text="Add to Cart - $250" disabled={true}/>
				<ButtonOnColor text="Add to Cart - $250"/>
				<ProductSizes
						option={[
							{label: "XS", value: "1"},
							{label: "S", value: "2"},
							{label: "M", value: "3"},
							{label: "L", value: "4"},
							{label: "XL", value: "5"},
							{label: "XXL", value: "6"},
							{label: "3XL", value: "7"},
						]}
				/>
			</Container>
	);
}

export default App;

