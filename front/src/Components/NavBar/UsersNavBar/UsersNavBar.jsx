import React from "react";
import NavBar from "../NavBar.jsx";
import User from "../../../assets/images/user3.png"
import logoSettings from "../../../assets/icons/style=outline, state=Default.svg"
import "./UsersNavBar.css"

function UsersNavBar() {
  return (
    <div>
      <div className="divUser">< img src={User} alt="foto de perfil" className="imgProfile"/>
      <button className="BtnSettings"><img src={logoSettings} alt="" className="imgSettings"/></button>

        <h1></h1>
        <p></p>
      </div>
      <div>
        <h3>Mis Playlists:</h3>
      </div>
      <div className="navBarraUsers"> <NavBar  color= "orange"/>
      </div>
    </div>
  );
}

export default UsersNavBar;
