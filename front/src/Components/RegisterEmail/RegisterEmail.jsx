import React from "react";
import { useNavigate, Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import Buttons from "../Buttons/Buttons";
import Header from "../Header/Header";

import "./RegisterEmail.css";

function LogIn() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/login/user`);
  };
  return (
    <div className="divLogInEmailContainer">
      <Link to={"/"}>
        <Header name="Crear Cuenta" />
      </Link>
      <h1> ¿Cuál es tu correo electrónico?</h1>
      <h3> correo electrónico:</h3>

      <SearchBar />
      <Link to={`/login/user`}>
        <Buttons title="continuar" color="orange" onclick={onclick} />
      </Link>
      <p>Deberás poder confirmar luego</p>
    </div>
  );
}

export default LogIn;