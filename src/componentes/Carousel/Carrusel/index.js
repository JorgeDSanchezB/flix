import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import VideoCard from "../VideoCard";
import { Styledh2 } from "../../UI";
import { colores } from "../../UI/variables";

const settings = {
  dots: true,
  infinite: false,
  arrows: false,
  swipeToSlide: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: false,
  speed: 300,
  autoplaySpeed: 7000,
  pauseOnHover: true,
  cssEase: "linear",
  appendDots: dots => (
    <div
      style={{
        background: colores.cNegro,
      }}
    >
      <ul> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: "27px",
        color: colores.cLacre,
        border: "2px solid",
        borderColor: colores.cLacre,
        borderRadius: "7px"
      }}
    >
      {i + 1}
    </div>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

};

const StyleSlider= styled.div`
display: flex;
flex-direction: column;
margin: 0 0 0 30px;
padding-bottom: 25px;
`
const Carrusel=({arregloVideos,tituloCarrusel})=>{

return <StyleSlider>
    <Styledh2>{tituloCarrusel}</Styledh2>
    <Slider {...settings}>      
    {
    arregloVideos.map((videos) => <VideoCard 
      url={videos.video}
      titulo={videos.nombre}
      />
      )
    }
    </Slider>
</StyleSlider>
}
export default Carrusel
