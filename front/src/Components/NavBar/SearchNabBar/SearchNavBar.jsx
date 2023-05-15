import React from "react";
import Input from "../../Input/Input";
import NavBar from "../NavBar";

function SearchNavBar() {
  return (
    <div>
      <h1>Buscador</h1>
      <Input placeHolder="¿Qué deseas escuchar?" type="search" />
      <p>Top 20</p>
      <NavBar color="orange" />
    </div>
  );
}

export default SearchNavBar;
