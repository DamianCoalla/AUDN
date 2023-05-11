import React from "react";
import { useNavigate, Link } from "react-router-dom";

import Input from "../Input/Input";
import Buttons from "../Buttons/Buttons";
import Header from "../Header/Header";

import "./RegisterEmail.css";

function LogIn() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/login/user`);
  };
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="divLogInEmailContainer">
      <Link to={"/"} className="link">
        <Header name="Crear Cuenta" />
      </Link>
      <h1> ¿Cuál es tu correo electrónico?</h1>
      <h3> correo electrónico:</h3>

      <Input type="email" onChange={handleOnChange} />
      <Link to={`/login/user`} className="link">
        <Buttons title="continuar" color="orange" onclick={onclick} />
      </Link>
      <p>Deberás poder confirmar luego</p>
    </div>
  );
}

export default LogIn;
