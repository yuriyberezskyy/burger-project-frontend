import React from "react";
import classes from "./Burger.css";
import BurgerIngridients from "./BurgerIngridient/BurgerIngredients";

const burger = (props) => {
  //Transforming object into array, also each key has different value, like "cheese: 2" so we transformed in ["cheese"],["cheese"]
  let transformedIngrediants = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngridients key={igKey + i} type={igKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngrediants.length === 0) {
    transformedIngrediants = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngridients type="bread-top" />
      {transformedIngrediants}
      <BurgerIngridients type="bread-bottom" />
    </div>
  );
};

export default burger;
