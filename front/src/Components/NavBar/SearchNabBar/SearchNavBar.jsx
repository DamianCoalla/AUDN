import React from "react";
import Input from "../../Input/Input";
import NavBar from "../NavBar";
import "./SearchNavBar.css"

function SearchNavBar() {
  return (
    <div>
      <div className="divHeader">
          <div className="divHeaderContent">
            <h2 className="divSearcher">Buscador</h2> 
            <Input/> 
          </div>
      </div>
      
      
      
        <span className="divTop">Top 20s</span>
    
      <div className="barraNav">
      <NavBar color="orange" />
      </div>
      </div>
    
    
  );
}

export default SearchNavBar;
