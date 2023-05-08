import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Start.css";

import Buttons from "../Buttons/Buttons";
import logo from "../../assets/icons/logo.svg";
import apple from "../../assets/icons/apple-logo.svg";
import google from "../../assets/icons/google-logo.svg";

function Start() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/home`);
  };
  return (
    <div className="divStartContainer">
      <img src={logo} alt="logo" />
      <h1>Música a medida.</h1>
      <div className="divBtnscontainer">
        <Link to={`home/`}>
          <Buttons title="Registrarse Gratis" onClick={onclick} />
        </Link>

        <Buttons icon={google} title="Continuar con Google" />
        <Buttons icon={apple} title="Continuar con Apple" />
        <Buttons title="Inicar Sesión" />
      </div>
    </div>
  );
}

export default Start;
