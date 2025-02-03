import React from 'react'
import scss from './Why.module.scss'
import Why from './Why'


function WhyCards({ title, text, text2, img }) {
  return (
    <div className={scss.whyCards}>
    <h1>{title}</h1>
    <span>
      {text}
    </span>
    <span>{text2}</span>
    <img src={img} alt="" />
  </div> 
  )
}

export default WhyCards