import React from "react";
import classes from "./Burger.css";
import BurgerIngridients from "./BurgerIngridient/BurgerIngredients";

const burger = (props) => {
  //Transforming object into array, also each key has different value, like "cheese: 2" so we transformed in ["cheese"],["cheese"]
  const transformedIngrediants = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => (
      <BurgerIngridients key={igKey + i} type={igKey} />
    ));
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngridients type="bread-top" />
      {transformedIngrediants}
      <BurgerIngridients type="bread-bottom" />
    </div>
  );
};

export default burger;
