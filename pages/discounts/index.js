import Title from "../../components/modules/Title";
import DiscountsPage from "../../components/templates/DiscountsPage";

function Descounts({ data }) {
  return (
    <div>
      <Title title="KhaniFood | discount" />
      <DiscountsPage data={data} />
    </div>
  );
}

export default Descounts;
export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  const myFoods = data.filter((food) => food.discount >= 1);
  return {
    props: { data: myFoods },
  };
}
