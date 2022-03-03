import React from "react";
import "./OutlineButton.css";
import { Button } from "react-bootstrap";

const OutlineButton = (props) => {
    const text = props.text;   
    return (
        <Button variant="outline-dark" className="start">{text}</Button>
    );
};

export default OutlineButton;

