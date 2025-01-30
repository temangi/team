import React from "react";
import scss from "./Category.module.scss";
import CategoryList from "./CategoryList/CategoryList";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";

const cards = [
  {
    img: img1,
    title: "Шоколад и какао продукты",
  },
  {
    img: img2,
    title: "Молочная продукция",
  },
  {
    img: img3,
    title: "Ингредиенты",
  },
  {
    img: img4,
    title: "Покрытия и наполнители",
  },
];

function Category() {
  const arrCards = cards.map((el, index) => (
    <CategoryList {...el} key={index} />
  ));
  return (
    <article className={scss.category}>
      <h1>
        Просмотр товаров <br />
        по <span>категориям</span>
      </h1>
      <article>{arrCards}</article>
    </article>
  );
}

export default Category;
