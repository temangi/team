import React from "react";
import scss from "./Recomendation.module.scss";
import Button from "../Button/Button";
import RecomendationList from "./RecomendationList/RecomendationList";
import prdct1 from "../../../src/assets/prdct1.svg"
import prdct2 from "../../../src/assets/prdct2.svg"
import prdct3 from "../../../src/assets/prdct3.svg"
import prdct4 from "../../../src/assets/prdct4.svg"
import strelkaL from "../../../src/assets/strelkaL.svg"
import strelkaR from "../../../src/assets/strelkaR.svg"

const products = [
    {
      img : prdct1
    },
    {
      img : prdct2
    },
    {
      img : prdct3
    },
    {
      img : prdct4
    },
];

const numbers = [
  {
    number : 1
  },
  {
    number : 2
  },
  {
    number : 3
  },
  {
    number : 4
  },
  {
    number : 5
  },
]

function Recomendation() {
  const arrPrdcts = products.map((el,index) => (
    <RecomendationList {...el} key={index}/>
  ))
  const arrNumbers = numbers.map((el,index) => <button>{el.number}</button>)
  return (
    <section className={scss.recomendation}>
      <span>Вам могут понравится</span>
      <div>
        <h1>
          Рекомендуемые <br /> товары
        </h1>
        <Button width="15%" title="Все товары"/>
      </div>
      <article>{arrPrdcts}</article>
      <footer>
        <img src={strelkaL} alt="" />
        <nav>{arrNumbers}</nav>
        <img src={strelkaR} alt="" />
      </footer>  
    </section>
  );
}

export default Recomendation;
