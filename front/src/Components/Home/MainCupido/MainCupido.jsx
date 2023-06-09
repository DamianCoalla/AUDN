import React, { useState } from "react";
import Header from "../../Header/Header.jsx";
import "./MainCupido.css";
import Button from "../../Button/Button.jsx";

import { useNavigate, Link } from "react-router-dom";
import Carrousel from "../../Carrousel/Carrousel.jsx";

function MainCupido() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/home`);
  };
  return (
    <div>
      <Link to="/home" className="link">
        <Header onClick={onclick} name="cupido musical" />
      </Link>
      <Carrousel />

      <Link to={"/playlist"} className="link">
        <Button title="Crear Playlist" color="orange" />
      </Link>
    </div>
  );
}

export default MainCupido;
