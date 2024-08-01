import { useRouter } from "next/router";
import DetailsPage from "../../components/templates/DetailsPage";

function Details({ food }) {
  const router = useRouter();
  if (router.isFallback) {
    <h2>LOADING ...</h2>;
  }
  return (
    <div>
      <DetailsPage {...food} />
    </div>
  );
}

export default Details;
export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data");
  const foods = await res.json();
  const myFoods = foods.slice(0, 5);
  const paths = myFoods.map((food) => ({ params: { id: food.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  if (params.id >= 11) {
    return {
      notFound: true,
    };
  }
  const res = await fetch(`http://localhost:4000/data/${params.id}`);
  const food = await res.json();
  return {
    props: {
      food,
    },
    revalidate: 10,
  };
}
