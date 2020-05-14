import React from "react";
import classes from "./Burger.css";
import BurgerIngridients from "./BurgerIngridient/BurgerIngridients";

const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngridients type="bread-top" />
      <BurgerIngridients type="cheese" />
      <BurgerIngridients type="meat" />
      <BurgerIngridients type="bread-bottom" />
    </div>
  );
};

export default burger;
