import React from "react";
import Selection from "../Selection/Selection.jsx";
import heart from "../../assets/icons/style=fill, state=inactive-3.svg";
import cross from "../../assets/icons/style=default, position=diagonal.svg";
import elvis from "../../assets/icons/elvis.jpeg";
import "./Carrousel.css";
function Carrousel() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, options);
  });

  return (
    <div>
      <div class="carousel">
        <a className="carousel-item" href="#one!">
          <img src={elvis} />
        </a>
        <a className="carousel-item" href="#two!">
          <img src={elvis} />
        </a>
        <a className="carousel-item">
          <img src="" />
        </a>
        <a className="carousel-item">
          <img src="" />
        </a>
        <a className="carousel-item">
          <img src="" />
        </a>
      </div>
      <Selection img={heart} />
      <Selection img={cross} />
    </div>
  );
}

export default Carrousel;
