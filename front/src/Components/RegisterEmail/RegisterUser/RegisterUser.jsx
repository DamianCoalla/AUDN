import React, { useState } from "react";
import Input from "../../Input/Input";
import Buttons from "../../Buttons/Buttons";
import Header from "../../Header/Header";
import { Link, useNavigate } from "react-router-dom";

import "./RegisterUser.css";

function LogInUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onclick = () => {
    navigate(`/home`);
  };

  const FuncionRegUser = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: name,
      email: "maria@gmail.com", //necesitamos que este dato provenga de la página anteior//
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/register",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        navigate(`/home`);
      } else {
        const respuesta = await response.json();
        alert("No se pudo registar el nuevo usuario");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="divLogInuserContainer">

        <form action="submit" onSubmit={FuncionRegUser}>
          <Link to={"/login"} className="link">
            <Header name="Crear Cuenta" />
          </Link>
          <h1>Ingrese un nombre de usuario y contraseña</h1>
          <h3>Nombre de Usuario:</h3>
          <Input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
          <h3>Contraseña</h3>
          <Input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
          <p>Deberás poder confirmar luego</p>
          <div className="divTermsAndConditionsContainer">
            <input type="checkbox" name="termsAndConditions" id="" />
            <p>
              He leido y acepto los <span>Terminos </span> y
              <span> Condiciones.</span>
            </p>
          </div>
          <Buttons title="Continuar" color="orange" />
        </form>

      </div>
    </>
  );
}

export default LogInUser;
