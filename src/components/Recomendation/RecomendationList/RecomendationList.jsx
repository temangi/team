import React from 'react'
import scss from "./RecomendationList.module.scss"
import Button from '../../Button/Button'
import { useState } from 'react'


function RecomendationList({img}) {
  const [active,setActive] = useState(1)

  function minus(){
    if (active != 1) setActive(active - 1)
  }

  return (
    <section className={scss.recomendationList}>
        <img src={img} alt="" />
        <p>Шпатель кондитерский <br /> пластиковый 254мм 50 SG250B</p>
        <span>Вес : 150 кг</span>
        <div>
          <h3>550 c</h3>
          <nav>
            <p onClick={minus}>-</p>
            <span>{active}</span>
            <p onClick={() => setActive(active +1)}>+</p>
          </nav>
        </div>
        <Button width="100%" title="В корзину"/>
    </section>
  )
}

export default RecomendationList