import React, { useEffect, useState } from "react";
import "./Carrousel.css";
import data from "../../../resources.json";
// import datajs from "../../../resources.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import elvis from "../../assets/icons/elvis.jpeg";
import Selection from "../Selection/Selection.jsx";
import heart from "../../assets/icons/style=fill, state=inactive-3.svg";
import cross from "../../assets/icons/style=default, position=diagonal.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carrousel.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function Carrousel() {
  const [fullSongList, setFullSongList] = useState([]);

  useEffect(() => {
    songList();
  }, []);

  const songList = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:8000/api/songs",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();

        const newList = respuesta.songs.map((cancion) => {
          const song = data.songs.find((item) => item.id === cancion.id);
          return { ...cancion, url: song.url };
        });

        setFullSongList(newList);
      } else {
        alert("Ocurrio un error del lado del cliente");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  console.log(fullSongList);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper container2"
      >
        {fullSongList.map((cancion) => {
          console.log(cancion);

          const agregarPlayList = () => {
            setFullSongList(...fullSongList, cancion);
          };

          return (
            <SwiperSlide>
              <img src={cancion.url} className="imgAlbum" />
              <h2>{cancion.name}</h2>
              <h2>{cancion.genere}</h2>
            </SwiperSlide>
          );
        })}
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cancion, i) => (
          <SwiperSlide>
            <img src={data.songs[i]} className="imgCover" />
          </SwiperSlide>
        ))} */}
      </Swiper>

      {/* <Selection img={heart} onClick={agregarPlayList} /> */}
      <button onClick={agregarPlayList}>
        <img src={heart} alt="" />
      </button>
      <Selection img={cross} />
    </>
  );
}

export default Carrousel;
