import Card from "../modules/Card";
import classes from "./menuPage.module.css";

function MenuPage({ foods }) {
  return (
    <div className={classes.container}>
      <h1>MENU</h1>
      <div className={classes.subContainer}>
        {foods.map((food) => (
          <Card {...food} key={food.id} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
