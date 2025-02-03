import React from 'react'
import Button from '../Button/Button'
import scss from "./Main.module.scss"
import Header from '../Header/Header'

function Main() {
  return (
    <section className={scss.Main}>
      <Header/>
      <main> 
        <h1>Ваш путеводитель <br /> в области сырья</h1>
        <div>
          <input type="" placeholder='Найти...' />
          <Button  title="Заказать звонок"/>
        </div>
      </main>
    </section>
  )
}

export default Main