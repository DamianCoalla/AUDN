import React from "react";

import "./Buttons.css";

function Buttons(props) {
  console.log(props);
  return (
    <div>
      <button className={`btnStart bg-${props.color}`}>
        <img src={props.icon} alt="" />
        {props.title}
      </button>
    </div>
  );
}

export default Buttons;
