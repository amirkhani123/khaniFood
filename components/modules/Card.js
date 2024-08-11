import Link from "next/link";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import classes from "./styles/card.module.css";
import Image from "next/image";

function Card(props) {
  const { id, name, price, discount, details } = props;
  return (
    <div className={classes.card}>
      <Image src={`/images/${id}.png`} alt={name} width={1000} height={300} />
      <div className={classes.details}>
        <h4>{name}</h4>
        <div>
          <Location />
          <span> {details[0].country}</span>
        </div>
      </div>
      <div className={classes.priceDiv}>
        <Dollar />
        {discount ? (
          <span className={classes.discountP}>
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span className={classes.price}>{price}$</span>
        )}
      </div>
      {discount ? <div className={classes.discount}>{discount} %</div> : null}
      <Link href={`/menu/${id}`}>See Details</Link>
    </div>
  );
}

export default Card;
