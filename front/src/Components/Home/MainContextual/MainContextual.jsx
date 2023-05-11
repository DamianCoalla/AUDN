import React from "react";
import "./MainContextual.css";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../Header/Header.jsx";
import SelectionList from "../../SelectionList/SelectionList";
import Buttons from "../../Buttons/Buttons.jsx";

function MainContextual() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/home`);
  };
  return (
    <div>
      <Link to="/home" className="link">
        <Header onClick={onclick} name="musica contextual" />
      </Link>
      <div className="divMainContextualContainer">
        <h2>¿Cuál es la ocasión?</h2>
        <SelectionList
          text="Actividad"
          filter1="Ejercicio físico"
          filter2="Limpieza"
          filter3="Celebración"
          filter4="Dormir"
          filter5="Meditar"
          filter6="Social"
          filter7="Estudiar"
          filter8="Relajación"
          filter9="Viajando"
        />
        <h2>¿Cómo te sientes?</h2>
        <SelectionList text="Estado de ánimo" display="none" />
        <h2>¿Cómo está el clima?</h2>

        <SelectionList text="Clima" display="none" />

        <h2>Selecciona hasta 3 géneros:</h2>
        <Link to={"/playlist"} className="link">
          <Buttons title="Crear Playlist" color="orange" />
        </Link>
      </div>
    </div>
  );
}

export default MainContextual;
