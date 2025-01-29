import React from 'react'
import fonpic from "../../assets/fonpic.svg"
import foodland from "../../assets/foodland.svg"
import person from "../../assets/Bag.svg"
import bag from "../../assets/korzina.svg"
import scss from "./Header.module.scss"

function Header() {
  return (
    <section className={scss.Header}>
      <header>
        <img className={scss.foodland} src={foodland} alt="" />
        <div>
          <p>Главная</p>
          <p>О нас</p>
          <p>Новости</p>
          <p>Каталог</p>
        </div>
        <span>
          <a href=""><img className={scss.bag} src={bag} alt="" /></a>
          <a href=""><img src={person} alt="" /></a>
        </span>
      </header>
      <main>
        <h1></h1>
        
      </main>
    </section>
  )
}

export default Header