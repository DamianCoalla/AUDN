import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div>
      <input type="text" className="inputSearchBar" onChange={props.onChange} />
    </div>
  );
}

export default SearchBar;
