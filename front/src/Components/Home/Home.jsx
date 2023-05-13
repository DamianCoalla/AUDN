import React from "react";
import SetMusic from "../SetMusic/SetMusic";
import "./Home.css";
import { Link } from "react-router-dom";
import cupido from "../../assets/icons/cupido.png";
import interrogationMark from "../../assets/icons/interrogationMark.png";
import bellActive from "../../assets/icons/style=outline, state=active, notification=true.svg";
import clockInactive from "../../assets/icons/state=active.svg";
import NavBar from "../NavBar/NavBar";

function Home() {
  return (
    <>
    
        
        <div className="headerContent">
          <h2 className="headerHome">Música ya</h2>
          <img src={clockInactive} alt="clock" className="imgClock" />
          <img src={bellActive} alt="bell" className="imgBell" />
        </div>
      

      
      
      <Link to={"/cupidomusical"} className="link">
        <div className="divCupidoMusical">
          <SetMusic
            img={cupido}
            title="Cupido Musical"
            paragraph="Tus artistas favoritos nunca van a dejarte el corazón roto."
        />
        </div>
      </Link>
      
      
      <Link to={"/musicaContextual"} className="link">
        <SetMusic 
          img={interrogationMark}
          title="Música Contextual"
          paragraph="Creamos la playlist perfecta para cualquier situación."
        />
      </Link>
      
      
      <NavBar color="orange" />
      
    </>
  );
}

export default Home;
