import Card from "../modules/Card";
import classes from "./discountsPage.module.css";

function DiscountsPage({ data }) {
  return (
    <div className={classes.container}>
      <h1>DISCOUNTS</h1>
      <div className={classes.subContainer}>
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default DiscountsPage;
