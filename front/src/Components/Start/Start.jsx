import React from "react";
import Buttons from "../Buttons/Buttons";
import logo from "../../assets/icons/logo.svg";
import apple from "../../assets/icons/apple-logo.svg";
import google from "../../assets/icons/google-logo.svg";

function Start() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>Música a medida.</h1>
      <Buttons title="Registrarse Gratis" />
      <Buttons icon={google} title="Continuar con Google" />
      <Buttons
        icon="../../assets/icons/apple-logo.svg"
        title="Continuar con Apple"
      />
      <Buttons title="Inicar Sesión" />
    </div>
  );
}

export default Start;
