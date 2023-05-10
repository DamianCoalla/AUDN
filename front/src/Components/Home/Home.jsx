import React from "react";
import SetMusic from "../SetMusic/SetMusic";
import "./Home.css";
import { Link } from "react-router-dom";
import cupido from "../../assets/icons/cupido.png";
import interrogationMark from "../../assets/icons/interrogationMark.png";
import bellActive from "../../assets/icons/style=outline, state=active, notification=true.svg";
import clockInactive from "../../assets/icons/state=inactive.svg";

function Home() {
  return (
    <>
      <div className="containerHomeHeader">
        <h1 className="headerHome">Música ya</h1>
        <img src={clockInactive} alt="clock" className="imgClock" />
        <img src={bellActive} alt="bell" className="imgBell" />
      </div>

      <Link to={"/cupidomusical"}>
      <SetMusic 
        img={cupido}
        title="Cupido Musical"
        paragraph="Tus artistas favoritos niunca van a dejarteel corazón roto"
      />
      </Link>
      <Link to={"/musicaContextual"}>
      <SetMusic
        img={interrogationMark}
        title="Música Contextual"
        paragraph="Creamos la playlist perfecta para cualquier situación"
        
      /></Link>
    </>
  );
}

export default Home;
