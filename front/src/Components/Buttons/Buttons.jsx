import React from "react";
import "./Buttons.css";

function Buttons(props) {
  return (
    <div>
      <button className="btnStart">
        {props.title}
        {props.icon}
      </button>
    </div>
  );
}

export default Buttons;
