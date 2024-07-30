import Link from "next/link";
import classes from "./styles/guide.module.css";

function Guide() {
  return (
    <div className={classes.container}>
      <Link href="/menu" className={classes.link}>
        menu
      </Link>
      <Link href="/menu" className={classes.link}>
        categories
      </Link>
      <Link href="/menu" className={classes.link}>
        discount
      </Link>
    </div>
  );
}

export default Guide;
