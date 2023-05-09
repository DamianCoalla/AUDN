import React from "react";
import backArrow from "../../assets/icons/position=left-1.svg";

function Header(props) {
  return (
    <div>
      <img src={backArrow} alt="backArrow" />
      <span>{props.name}</span>
    </div>
  );
}

export default Header;
