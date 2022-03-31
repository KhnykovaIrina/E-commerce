import React, { useState } from "react";
import "./css/ShoppingCartButton.css";
import { Button } from "react-bootstrap";

const ShoppingCartButton = (props) => {
  const text = props.text;
  const disabled = props.disabled;
  const [count, setPrice] = useState(250);

  return (
    <div>
      <Button
        variant="dark"
        className="rounded-0 btnCart"
        disabled={disabled}        
        onClick={() => setPrice(count + 5)}
      >
        {text}
        {count}
      </Button>
    </div>
  );
};

export default ShoppingCartButton;