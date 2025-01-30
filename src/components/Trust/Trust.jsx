import React from "react";
import scss from "./Trust.module.scss";
import Slider from "react-slick";
import sl1 from "../../assets/slider/sl1.svg";
import sl2 from "../../assets/slider/sl2.svg";
import sl3 from "../../assets/slider/sl3.svg";
import sl4 from "../../assets/slider/sl4.svg";
import sl5 from "../../assets/slider/logo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const photo = [sl1, sl5,sl1, sl5,sl1, sl5,sl1, sl5,sl1, sl5,sl1, sl5,sl1, sl5,];

function Trust() {
  const imgs = photo.map((el, index) => <img className={scss.sliderImg}  src={el} key={index} />);

  const settings = {        
    infinite: true,      
    speed: 5000,       
    slidesToShow: 5,     
    slidesToScroll: 1,   
    autoplay: true,      
    autoplaySpeed: 0, 
    cssEase: "linear",  
    variableWidth: true, 
  };
  
  return (
    <section className={scss.slider}>
      <h1>Нам доверяют</h1>
      <Slider {...settings}>{imgs}</Slider>
    </section>
  );
}

export default Trust;
