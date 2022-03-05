import React, { useState } from "react";
import "../ShoppingCartButton/scss/ShoppingCartButton.scss";
import { Container } from "react-bootstrap";

export default function ButtonOnLick(props) {
	const [cls, setCls] = useState("green");
	const text = props.text;

	return (
			<Container className="text-center">
				<style>{`
        .red {background-color: #8ecae6}
        .green {background-color: #ffb703}
      `}</style>
				<button
						className={cls + " " + "btnAdd" + " " + "rounded-0"}
						style={{fontSize: 25, fontFamily: "-moz-initial"}}
						onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}
				>{text}
				</button>
			</Container>
	);
}