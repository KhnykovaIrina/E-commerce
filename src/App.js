import ShoppingCartButton from "./components/ShoppingCartButton";
import React from "react";

function App() {
    return (
        <div>
            <ShoppingCartButton text="Add to Cart - $250"/>
            <ShoppingCartButton text="Add to Cart - $250" disabled={true}/>
            <ShoppingCartButton backgroundColor={"#ebee0a"} text="Add to Cart - $250"/>
        </div>
    );
}

export default App;
