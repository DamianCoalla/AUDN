import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import Buttons from "../../Buttons/Buttons";
import NavBar from "../../Header/Header";
import { Link, useNavigate } from "react-router-dom";

function LogInUser() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/home`);
  };
  return (
    <>
      <NavBar name="Crear Cuenta" />
      <h1>Ingrese un nombre deusuario y contraseña</h1>
      <h3>Nombre de Usuario:</h3>
      <SearchBar />
      <h3>Contraseña</h3>
      <SearchBar />
      <p>Deberás poder confirmar luego</p>
      <input type="checkbox" name="termsAndConditions" id="" />
      <p>
        He leido i acepto los <span>Terminos</span>y<span>Condiciones.</span>
      </p>
      <Link to={`/home`}>
        <Buttons title="Continuar" onClick={onclick} />
      </Link>
    </>
  );
}

export default LogInUser;
