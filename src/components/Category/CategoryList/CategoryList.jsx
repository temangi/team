import React, { useState } from "react";
import scss from "./CategoryList.module.scss";
import Button from "../../Button/Button";

function CategoryList({ img, title }) {
  return (
    <section
      className={scss.categoryList}
      style={{ background: `url(${img}) center/cover no-repeat` }}
    >
      <main>
        <h1>{title}</h1>
        <Button width="98%" title={"Подробнее"} />
      </main>
    </section>
  );
}

export default CategoryList;
