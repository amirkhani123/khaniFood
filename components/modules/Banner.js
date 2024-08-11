import Link from "next/link";
import classes from "./styles/banner.module.css";
import Image from "next/image";

function Banner() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h2>KhaniFood</h2>
        <p>Food Delivery and takeout !</p>
        <span>
          KhaniFood is an online food ordering and delivery platform launched by
          Amir Khani in 2022. Meals are delivered by couriers using cars,
          scooters, bikes, or on foot.
        </span>
        <Link href="/menu" className={classes.link}>see All</Link>
      </div>
      <div className={classes.right}>
        <Image src="/images/banner.png" alt="banner" width={1000} height={455} />
      </div>
    </div>
  );
}

export default Banner;
