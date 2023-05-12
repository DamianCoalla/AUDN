import React from "react";
import "./LogIn.css";

import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LogIn() {
  return (
    <div className="divLogInContainer">
      <Header title="Iniciar sesión" />

      <h3>Nomre de Usuario o E-mail:</h3>
      <Input />

      <h3>Contraseña:</h3>
      <Input />

      <Button title="Iniciar sesión" color="orange" disabled={true} />
      <a href="">
        <p>¿Olvidaste tu Contraseña?</p>
      </a>
    </div>
  );
}

export default LogIn;
