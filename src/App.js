import React from "react";
import ShoppingCartButton from './components/ShoppingCartButton';
import ButtonOnLick from "./components/ButtonOnLick/ButtonOnСlick";

function App() {
	return (
			<div>
				<ShoppingCartButton text="Add to Cart - $250"/>
				<ShoppingCartButton text="Add to Cart - $250" disabled={true}/>
				<ButtonOnLick text="Add to Cart - $250"/>
			</div>
	);
}

export default App;

