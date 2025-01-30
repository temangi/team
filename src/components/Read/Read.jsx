import React from "react";
import minus from "../../assets/minus.svg";
import cooking from "../../assets/cooking.svg";
import scss from "./Read.module.scss";
import strelka from "../../assets/strelka.svg";
import Button from "../Button/Button";

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
        <div className={scss.readRight}>
          <Button width="200px" title={"Читать далее"}/>
        </div>
      </main>
    </section>
  );
}

export default Read;
