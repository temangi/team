import React from 'react'
import scss from "./Componi.module.scss"
import sicao from "../../assets/sicao.svg"
import aydin from "../../assets/aydin.svg"
import oao from "../../assets/oao.svg"
import cacao from "../../assets/cacao.svg"
import canma from "../../assets/canma.svg"
import callebaut from "../../assets/callebaut.svg"
import turovuski from "../../assets/turovuski.svg"


function Componi() {

  const image = [sicao, aydin, oao, cacao, canma, callebaut, turovuski]

  const imgs = image.map((el, index) => (
    <img className={scss.sliderImg} src={el} key={index} />
  ))     

  return (
    <>
    <section className={scss.componi}>
        <h1 className={scss.componiLeft}>Официальные дистрибьюторы</h1>  
        <main className={scss.cacao}>{imgs}</main>
    </section>
    </>
  )
}

export default Componi