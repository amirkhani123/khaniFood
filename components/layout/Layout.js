import Link from "next/link";
import classes from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.left}>
          <Link href="/">KHANIFOOD</Link>
        </div>
        <div className={classes.right}>
          <Link href="/menu">menu</Link>
          <Link href="/categories">categories</Link>
          <Link href="/discounts">discounts</Link>
        </div>
      </header>
      <div className={classes.container}>{children}</div>
      <footer className={classes.footer}>
        <p>Developed by Amir Khani with ❤️ || Next.js</p>
      </footer>
    </>
  );
}

export default Layout;
