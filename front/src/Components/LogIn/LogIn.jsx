import React from "react";
import "./LogIn.css";

import Header from "../Header/Header";
import Input from "../Input/Input";
import Buttons from "../Buttons/Buttons";

function LogIn() {
  return (
    <div className="divLogInContainer">
      <Header title="Iniciar sesión" />

      <h3>Nomre de Usuario o E-mail:</h3>
      <Input />

      <h3>Contraseña:</h3>
      <Input />

      <Buttons title="Iniciar sesión" color="orange" />
      <a href="">
        <p>¿Olvidaste tu Contraseña?</p>
      </a>
    </div>
  );
}

export default LogIn;
