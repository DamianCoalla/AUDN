import React, { useState } from "react";
import "./SelectionList.css";
import DownArrow from "../../assets/icons/position=down.svg"

function SelectionList(props) {
  const [expand, setExpand] = useState(false) 
  
  const onclick = () => {
    if (expand === true) {
      setExpand(false);
    } else {
      setExpand(true);
    } }
  
  return (
    <>
      <div>
        <input
          type="text"
          className="btnSelectionList"
          placeholder={`${props.text}`}
        /> <button className="btnDownArrow"><img src={DownArrow} alt="DownArrow" onClick={onclick} /></button>
        <div className="Activities">
          <ul className={`ul-${props.display}`}>
            <li>{props.filter1}</li>
            <li>{props.filter2}</li>
            <li>{props.filter3}</li>
            <li>{props.filter4}</li>
            <li>{props.filter5}</li>
            <li>{props.filter6}</li>
            <li>{props.filter7}</li>
            <li>{props.filter8}</li>
            <li>{props.filter9}</li>
          </ul>
        </div>
      </div>

      <div className="dropdown">

      </div>
    </>
  );
}


export default SelectionList;
