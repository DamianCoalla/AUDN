import React from "react";
import "./MainContextual.css";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../Header/Header.jsx";
import SelectionList from "../../SelectionList/SelectionList";
import Button from "../../Button/Button.jsx";
import Generes from "../../generes/Generes";

function MainContextual() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate(`/home`);
  };
  return (
    <div>
      <Link to="/home" className="link">
        <Header onClick={onclick} name="musica contextual" title="Música Contextual" />
      </Link>
      <div className="divMainContextualContainer">
        <h2>¿Cuál es la ocasión?</h2> <br />
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
        /> <br /><br />
        <h2>¿Cómo te sientes?</h2> <br />
        <SelectionList text="Estado de ánimo" display="none" /> <br /><br />
        <h2>¿Cómo está el clima?</h2> <br />

        <SelectionList text="Clima" display="none" /> <br /> <br />

        <h2>Selecciona hasta 3 géneros:</h2> <br />
        <div className="divGeneres">
          <Generes title="Rock" color="tranparent"/> <Generes title="Country" color="tranparent"/> <Generes title="Soul" color="tranparent"/>
          <Generes title="Jazz" color="tranparent"/> <Generes title="Blues" color="tranparent"/> <Generes title="Hip-Hop" color="tranparent"/>
          <Generes title="Pop" color="tranparent"/> <Generes title="Reggae" color="tranparent"/> <Generes title="Folk" color="tranparent"/>
          <Generes title="R&B" color="tranparent"/> <Generes title="Clásico" color="tranparent"/> <Generes title="Alternativo" color="tranparent"/>
          <Generes title="Ambiente" color="tranparent"/> <Generes title="EDM" color="tranparent"/> <Generes title="Electrónica" color="tranparent"/>
          <Generes title="Disco" color="tranparent"/> <Generes title="New Age" color="tranparent"/> <Generes title="Punk" color="tranparent"/>
        </div>


        <Link to={"/playlist"} className="link">
          <Button title="Crear Playlist" color="tranparent" />
        </Link>
      </div>
    </div>
  );
}

export default MainContextual;
