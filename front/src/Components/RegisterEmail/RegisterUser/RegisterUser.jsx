import React from "react";
import Input from "../../Input/Input";
import Buttons from "../../Buttons/Buttons";
import Header from "../../Header/Header";
import { Link, useNavigate } from "react-router-dom";

import "./RegisterUser.css";

function LogInUser() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/home`);
  };
  return (
    <>
      <div className="divLogInuserContainer">
        <Link to={"/login"} className="link">
          <Header title="Crear Cuenta" />
        </Link>
        <h1>Ingrese un nombre de usuario y contraseña</h1>
        <h3>Nombre de Usuario:</h3>
        <Input type="text" />
        <h3>Contraseña</h3>
        <Input type="password" />
        <p>Deberás poder confirmar luego</p>
        <div className="divTermsAndConditionsContainer">
          <input type="checkbox" name="termsAndConditions" id="" />
          <p>
            He leido y acepto los <span>Terminos </span> y
            <span> Condiciones.</span>
          </p>
        </div>
        <Link to={`/home`} className="link">
          <Buttons title="Continuar" color="orange" onClick={onclick} />
        </Link>
      </div>
    </>
  );
}

export default LogInUser;
