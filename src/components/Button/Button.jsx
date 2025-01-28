import React from 'react'
import arrow from "../../assets/стрелка.svg"
import scss from "./Button.module.scss"

function Button({title,width}) {
  return (
    <button style={{width : `${width}`}} className={scss.btn}>{title}<div><img src={arrow} alt="" /></div></button>
  )
}

export default Button