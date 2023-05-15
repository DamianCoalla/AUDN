import React from "react";
import Selection from "../Selection/Selection.jsx";
import heart from "../../assets/icons/style=fill, state=inactive-3.svg";
import cross from "../../assets/icons/style=default, position=diagonal.svg";
import elvis from "../../assets/icons/elvis.jpeg";
import "./Carrousel.css";
import data from "../../../resources.json";
import datajs from "../../../resources.js";

function Carrousel() {
  // data["songs"].map((cancion) => {
  //   console.log(cancion.tapaAlbum);
  // });
  /*   document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, options);
  }); */

  return (
    <div>
      {datajs.map((cancion) => (
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img src={cancion.tapaAlbum} className="imgCover" />
            <p>{cancion.algo}</p>
          </a>
          <a className="carousel-item" href="#two!">
            {/* <img src={cancion.tapaAlbum} /> */}
            <p>{cancion.id}</p>
          </a>
        </div>
      ))}
      <Selection img={heart} />
      <Selection img={cross} />
    </div>
  );
}

export default Carrousel;
