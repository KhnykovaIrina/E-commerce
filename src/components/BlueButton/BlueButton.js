import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import "../BlueButton/BlueButton.css";

const BlueButton = (props) => {
   const text = props.text;

   return (
      <Button id="blue" variant='primary' className="rounded-0">{text}</Button>
   );
};

export default BlueButton;
