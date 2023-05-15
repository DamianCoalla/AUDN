import React, { useState } from "react";
import "./LogIn.css";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LogInUser = async (event) => {
    console.log("1");
    event.preventDefault();
    console.log("2");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: user,
      password: password,
    });
    console.log(raw);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:8000/api/login",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        localStorage.setItem("token", respuesta.token);
        console.log("Hola");
        navigate("/home");
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="divLogInContainer">
      {/* <form action="submit" onSubmit={LogInUser}> */}
      <Header title="Iniciar sesión" />

      <h3>Nomre de Usuario o E-mail:</h3>
      <Input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setUser(e.target.value);
        }}
        value={user}
      />

      <h3>Contraseña:</h3>
      <Input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />

      <Button
        title="Iniciar sesión"
        color="orange"
        onClick={LogInUser} /* disabled={true} */
      />
      <a href="">
        <p>¿Olvidaste tu Contraseña, gil?</p>
      </a>
      {/* </form> */}
    </div>
  );
}

export default LogIn;
