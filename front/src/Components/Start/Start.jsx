import React from "react";

import { Link } from "react-router-dom";
/* import { useNavigate } from "react-router-dom";
 */
import "./Start.css";

import Buttons from "../Buttons/Buttons";
import logo from "../../assets/icons/logo.svg";
import apple from "../../assets/icons/apple-logo.svg";
import google from "../../assets/icons/google-logo.svg";

function Start() {
  return (
    <div className="divStartContainer">
      <img src={logo} alt="logo" />
      <h1>Música a medida.</h1>
      <div className="divBtnscontainer">
        <Link to={`/register`} className="link">
          <Buttons title="Registrarse Gratis" color="orange" />
        </Link>

        <Buttons
          icon={google}
          title="Continuar con Google"
          color="tranparent"
        />
        <Buttons icon={apple} title="Continuar con Apple" color="tranparent" />

        <Link to={`/login`} className="link">
          <Buttons title="Inicar Sesión" color="white" />
        </Link>
      </div>
    </div>
  );
}

export default Start;
