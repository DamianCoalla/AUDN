import React from 'react'
import Header from "../Header/Header.jsx"
import "./MainCupido.css"
import Buttons from '../Buttons/Buttons.jsx'


import { useNavigate, Link } from "react-router-dom";
import Carrousel from '../Carrousel/Carrousel.jsx'


function MainCupido() {
  
    const navigate = useNavigate();
    const onclick = () => {
      navigate(`/home`);
    };
  return (
    <div>
      <Link to="/home"><Header 
    onClick={onclick}
    name="cupido musical"/>
    </Link>
    <Carrousel/>
    
    <Buttons title="Crear Playlist"
             color="orange"/></div>
  )
}

export default MainCupido