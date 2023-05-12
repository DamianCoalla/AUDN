import React, { useState } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Header from "../../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import Placeholder from "../../../assets/icons/icon-placeholder.svg"

import "./RegisterUser.css";

function RegisterUser() {
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
      email: JSON.parse(localStorage.getItem("email")),
      // email: "Josesito@gmail.com", //necesitamos que este dato provenga de la página anteior//
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
        <form action="submit" onSubmit={FuncionRegUser} className="formUser">
          <Link to={"/register"} className="link">
            <Header title="Crear Cuenta" />
          </Link>
          <h2>Ingresa un nombre de usuario y contraseña.</h2><br />
          <h3>Nombre de Usuario:</h3><br />
          <Input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          /> <br />
          <h4>Contraseña:</h4> <br />
          <Input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          /> <br />
          <p className="security">Deberá contener al menos 8 caracteres.</p> <br />
          <div className="divTermsAndConditionsContainer">
            <input type="checkbox" name="termsAndConditions" id="" className="checkboxTerms" />
            <p className="conditions">
              He leído y acepto los <span>Términos </span> y
              <span> Condiciones.</span>
            </p>
          </div>
          <Button title="Continuar" color="orange" disabled={true} />
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
