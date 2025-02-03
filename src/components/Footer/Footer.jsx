import React from "react";
import scss from "./Footer.module.scss";
import foodland from "../../assets/foodland.svg";
import inst from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

function Footer() {
  const arr = [
    "Главная",
    "Каталог",
    "Новости",
    "Личный кабинет",
    "Корзина",
    "О нас",
  ];
  const arr2 = ["Шоколад", "Сливки", "Сыр", "Декор", "Орехи"];

  let navs1 = arr.map((el, index) => (
    <a className={scss.nav} key={index}>
      {el}
    </a>
  ));
  let navs2 = arr2.map((el, index) => (
    <a className={scss.nav} key={index}>
      {el}
    </a>
  ));

  return (
    <main className={scss.main}>
      <footer className={scss.footer}>
        <section className={scss.footer1}>
          <div>
            <img src={foodland} alt="" />
            <p>
              Ваш путеводитель в области сырья и <br />
              ингредиентов для пищевой промышленности
            </p>
          </div>
          <div>
            <h2>Контакты</h2>
            <span>Г.Бишкек ул. Матросова 1а/21</span>
            <span>+996 0550 114 477</span>
          </div>
        </section>
        <section className={scss.footer2}>
          <div>
            <nav>
              <h1>Навигация</h1>
              {navs1}
            </nav>
            <nav>
              <h1>Каталог</h1>
              {navs2}
            </nav>
          </div>
          <article className={scss.socials}>
            <img src={inst} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </article>
        </section>
      </footer>
      <p className={scss.box}>@FoodLand - 2024</p>
    </main>
  );
}

export default Footer;
