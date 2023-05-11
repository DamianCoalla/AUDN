import React, { useState } from "react";
import "./SelectionList.css";

function SelectionList(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="divSelectionListContainer">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="selectSelectionList"
      >
        <option value="" disabled selected>
          {props.text}
        </option>
        <option value="option1">{props.filter1}</option>
        <option value="option2">{props.filter2}</option>
        <option value="option3">{props.filter3}</option>
        <option value="option4">{props.filter4}</option>
        <option value="option5">{props.filter5}</option>
        <option value="option6">{props.filter6}</option>
        <option value="option7">{props.filter7}</option>
        <option value="option8">{props.filter8}</option>
        <option value="option9">{props.filter9}</option>
      </select>
    </div>
  );
}

export default SelectionList;
