import React from "react";
import SetMusic from "../SetMusic/SetMusic";
import "./Home.css";

import cupido from "../../assets/icons/cupido.png";
import interrogationMark from "../../assets/icons/interrogationMark.png";
import bellActive from "../../assets/icons/style=outline, state=active, notification=true.svg";
import clockInactive from "../../assets/icons/state=inactive.svg";

function Home() {
  return (
    <>
      <div className="containerHomeHeader">
        <h1>Música ya</h1>
        <img src={clockInactive} alt="clock" />
        <img src={bellActive} alt="bell" />
      </div>

      <SetMusic
        img={cupido}
        title="Cupido Musical"
        paragraph="Tus artistas favoritos niunca van a dejarteel corazón roto"
      />
      <SetMusic
        img={interrogationMark}
        title="Música Contextual"
        paragraph="Creamos la playlist perfecta para cualquier situación"
      />
    </>
  );
}

export default Home;
