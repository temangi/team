import React from "react";
import scss from "./Why.module.scss";
import WhyCards from "./WhyCards";
import whyImg1 from "../../assets/whyImg1.svg";
import whyImg2 from "../../assets/whyImg2.svg";
import category from '../../assets/category.svg'
import star from '../../assets/star.svg'

const arr = [
  {
    title: "Нам можно доверять.",
    text: "Мы выстраиваем долгосрочные отношения. Развиваемся, чтоб помочь нашим клиентам становиться ещё лучше",
    img: star,
  },
  {
    title: "Экспертность",
    text: "Наша экспертность в сфере применения кондитерского сырья. Возможность предоставления технологической поддержки.",
    img: star,
  },
  {
    title: "Гарантия качества",
    text: "Высокий уровень поставляемых услуг",
    text2:
      "Большой опыт работы с международными поставщиками. Закрываем все вопросы по бесперебойному обеспечению производств сырьевой базой.",
    img: category,
  },
];

function Why() {
  const cards = arr.map((el, index) => <WhyCards key={index} {...el} />);

  return (
    
    <section className={scss.why}>
      <h2>
        Почему <br />
        выбирают нас
      </h2>
      <img src={whyImg1} className={scss.img1} alt="" />
      <img src={whyImg2} className={scss.img2} alt="" />
      {cards}
    </section>
  );  
}

export default Why;
