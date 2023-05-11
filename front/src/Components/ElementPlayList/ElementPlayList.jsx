import React from "react";
import "./ElementPlayList.css";
import dots from "../../assets/icons/position=vertical.svg";

function ElementPlayList(props) {
  return (
    <div>
      <ul className="collection ">
        <li className="collection-item avatar liDisplay">
          <img src={props.img} alt="" className="square imgSize" />
          <div className="divPlaylistText">
            <span className="title">{props.song}</span>
            <p>{props.artist}</p>
          </div>
          <div className="secondary-content divDotContainer">
            <img src={dots} alt="" className="imgDots" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ElementPlayList;
