import React from "react";
import minus from "../../assets/minus.svg";
import cooking from "../../assets/cooking.svg";
import scss from "./Read.module.scss";
import strelka from "../../assets/strelka.svg";

function Read() {
  return (
    <section className={scss.read}>
      <h1>
        Мы помогаем местным кондитерам и шеф- <br /> поварам претворять в жизнь
        свои самые <br /> смелые кулинарные задумки
      </h1>
      <main>
        <p className={scss.readLeft}>
          {" "}
          ______ Мы предлагаем вам не росто сырье, а экспертность и {" "}
          индивидуальный подход: всегда готовы помочь найти альтернативу,
          закрыть срочную потребность или предложить уникальное решение.
        </p>
        <img className={scss.readRight} src={cooking} alt="" />
      </main>
    </section>
  );
}

export default Read;
