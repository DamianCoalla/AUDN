import React from "react";

import "./Generes.css";

function Generes(props) {
  console.log(props);
  return (
    <div>
      <button
        className={`btnGeneres bg-${props.color}`}
        disabled={props.disabled}
      >
        <img src={props.icon} alt="" />
        {props.title}
      </button>
    </div>
  );
}

export default Generes;
