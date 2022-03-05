import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./scss/ButtonOnColor.scss";

export default function ButtonOnColor(props) {
	const [cls, setCls] = useState("green");
	const text = props.text;

	return (
			<Container className="text-center">
				<style>{`
        .bluebonnet {background-color: #8ecae6}
        .orange {background-color: #ffb703}
      `}</style>
				<div className="btnAdd">
				<button
						className={cls}
						style={{fontSize: 25, width: 400, height:70}}
						onClick={() => setCls((cls) => (cls === "bluebonnet" ? "orange" : "bluebonnet"))}
				>{text}
				</button>
				</div>
			</Container>
	);
}