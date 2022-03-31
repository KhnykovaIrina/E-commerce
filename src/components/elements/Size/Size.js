import React from "react";
import "./Size.css";

const Size = (props) => {
  return (
    <div>
      <ul className="col4">
        <li className="big" onClick={() => props.onClick(props.label)}>
          {props.label}{" "}
        </li>
      </ul>
    </div>
  );
};

export default Size;
