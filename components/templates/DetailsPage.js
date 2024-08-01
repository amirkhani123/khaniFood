import toast from "react-hot-toast";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import classes from "./detailsPage.module.css";
function DetailsPage(props) {
  const { id, name, price, discount, details, ingredients } = props;
  return (
    <div className={classes.container}>
      <h2>DETAILS</h2>
      <div className={classes.subContainer}>
        <img src={`/images/${id}.png`} alt={name} />
        <div>
          <h3>{name}</h3>
          <span className={classes.Location}>
            <Location />
            {details[0].country}
          </span>
          <span className={classes.price}>
            <Dollar />
            {discount ? (
              <span>{(price * (100 - discount)) / 100} $</span>
            ) : (
              <span>{price}$</span>
            )}
          </span>
          <div>
            {discount ? (
              <div className={classes.discount}>
                <span>{discount} % OFF</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className={classes.details}>
        <h3>Details</h3>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>
              <p>{Object.keys(detail)[0]} : </p>
              <span>{Object.values(detail)[0]}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.ingredients}>
        <h4>Ingredients</h4>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button
        className={classes.button}
        onClick={() => {
          toast.error("This dont work !");
        }}
      >
        ADD TO CARD
      </button>
    </div>
  );
}

export default DetailsPage;
