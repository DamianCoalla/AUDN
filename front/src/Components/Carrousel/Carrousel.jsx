import React from 'react'
import Selection from "../Selection/Selection.jsx"
import heart from "../../assets/icons/style=fill, state=inactive-3.svg"
import cross from "../../assets/icons/style=default, position=diagonal.svg"
import elvis from "../../assets/icons/elvis.jpeg"
import "./Carrousel.css"
function Carrousel() {
  return (
    <div >
        <img src ={elvis} alt="artist" className='imgCarrousel' />
        <Selection 
    img={heart}/>
    <Selection 
    img={cross}/>
    </div>
  )
}

export default Carrousel