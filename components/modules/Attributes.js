import classes from "./styles/attributes.module.css";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";

function Attributes() {
  return (
    <div className={classes.container}>
      <h3>Why us ?</h3>
      <div className={classes.main}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Choice />
          <p>your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
