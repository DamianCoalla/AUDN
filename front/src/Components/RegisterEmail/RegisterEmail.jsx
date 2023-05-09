import React from "react";
import { useNavigate, Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import Buttons from "../Buttons/Buttons";
import NavBar from "../Header/Header";

function LogIn() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/login/user`);
  };
  return (
    <div>
      <NavBar name="Crear Cuenta" />
      <h1> ¿Cuál es tu correo electrónico?</h1>
      <h3> correo electrónico:</h3>

      <SearchBar />
      <Link to={`/login/user`}>
        <Buttons title="continuar" onclick={onclick} />
      </Link>
      <p>Deberás poder confirmar luego</p>
    </div>
  );
}

export default LogIn;
