import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import Companys from "../modules/Companys";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Instruction from "../modules/Instruction";
import References from "../modules/References";
import classes from "./homePage.module.css";

function HomePage() {
  return (
    <div className={classes.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companys />
      <Instruction />
      <Guide />
      <References />
    </div>
  );
}

export default HomePage;
