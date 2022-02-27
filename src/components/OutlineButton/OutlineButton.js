import React from "react";
import "./OutlineButton.css";
import { Button } from "react-bootstrap";

const OutlineButton = (props) => {
    const text = props.text;   
    return (
        <Button id="start" variant="outline-dark" className="rounded-0">{text}</Button>
    );
};

export default OutlineButton;

