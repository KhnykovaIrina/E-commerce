import React from "react";
import "./ShoppingCartButton.css";
import {Button} from "react-bootstrap";

const ShoppingCartButton = (props) => {
    const text = props.text;
    const disabled = props.disabled;
    const backgroundColor = props.backgroundColor;

    return (
        <Button variant="dark" className="rounded-0" style={{backgroundColor: backgroundColor}} disabled={disabled}>
            {text}
        </Button>
    );
};

export default ShoppingCartButton;
