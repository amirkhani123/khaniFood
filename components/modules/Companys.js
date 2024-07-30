import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import classes from "./styles/companys.module.css";

function Companys() {
  return (
    <div className={classes.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companys;
