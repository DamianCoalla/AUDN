import React from "react";
import "./Header.css";
import backArrow from "../../assets/icons/position=left-1.svg";

function Header(props) {
  return (
    <div className="divHeaderContainer">
      <img src={backArrow} alt="backArrow" />
      <span>{props.name}</span>
    </div>
  );
}

export default Header;
