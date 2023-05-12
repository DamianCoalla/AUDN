import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div>
      <input
        type={`${props.type}`}
        placeholder={`${props.placeHolder}`}
        className="inputSearchBar"
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
