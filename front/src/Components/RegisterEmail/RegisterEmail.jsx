import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Input from "../Input/Input";
import Buttons from "../Buttons/Buttons";
import Header from "../Header/Header";

import "./RegisterEmail.css";

function RegisterEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const onclick = () => {
    navigate(`/register/user`);
  };

  const FuncionCheckEmail = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/checkemail",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        localStorage.setItem("email", respuesta.email);
        console.log(email);
        navigate(`/register/user`);
      } else {
        const respuesta = await response.json();
        alert("Email ya registrado");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="">
      <form action="submit" onSubmit={FuncionCheckEmail}>
        <Link to={"/"} className="link">
          <Header title="Crear Cuenta" />
        </Link>
        <h1> ¿Cuál es tu correo electrónico?</h1>
        <h3> correo electrónico:</h3>

        {/* <Input type="email" onChange={handleOnChange} /> */}
        <Input
          type="email"
          placeHolder="E-mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <Buttons type="submit" title="continuar" color="orange" />
        <p>Deberás poder confirmar luego</p>
      </form>
    </div>
  );
}

export default RegisterEmail;
