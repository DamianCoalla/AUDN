import React from "react";
import "./SetMusic.css";

function SetMusic(props) {
  return (
    <div className="divSetMusic">
      <img src={props.img} alt="" className="imgSetMusic" />
      <h5 className="headerSetMusic"> {props.title} </h5>
      <p className="paragraphSetMusic"> {props.paragraph} </p>
    </div>
  );
}

export default SetMusic;
