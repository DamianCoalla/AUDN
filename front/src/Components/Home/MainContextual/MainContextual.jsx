import React from "react";
import "./MainContextual.css";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../Header/Header.jsx";
import SelectionList from "../../SelectionList/SelectionList";
import Button from "../../Button/Button.jsx";

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
        <Button title="Rock" /> <Button title="Country" /> <Button title="Soul" />
        <Button title="Jazz" /> <Button title="Blues" /> <Button title="Hip-Hop" />
        <Button title="Pop" /> <Button title="Reggae" /> <Button title="Folk" />
        <Button title="R&B" /> <Button title="Clásico" /> <Button title="Alternativo" />
        <Button title="Ambiente" /> <Button title="EDM" /> <Button title="Electrónica" />
        <Button title="Disco" /> <Button title="New Age" /> <Button title="Punk" />


        <Link to={"/playlist"} className="link">
          <Button title="Crear Playlist" color="orange" />
        </Link>
      </div>
    </div>
  );
}

export default MainContextual;
