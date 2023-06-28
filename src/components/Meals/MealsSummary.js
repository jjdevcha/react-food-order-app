import React from "react";
import classes from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>Choose you favorite meal from our broad selection</p>
      <p>All our meals are cooked with high-quality ingrdients</p>
    </section>
  );
}

export default MealsSummary;
