import { useRouter } from "next/router";
import DetailsPage from "../../components/templates/DetailsPage";
import { RotatingLines } from "react-loader-spinner";
import Title from "../../components/modules/Title";

function Details({ food }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div
        style={{
          maxWidth: "1100px",
          margin: "165px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RotatingLines width="250" strokeColor="#02da89" strokeWidth="1" />
      </div>
    );
  }
  return (
    <div>
      <Title title="KhaniFood | details" />
      <DetailsPage {...food} />
    </div>
  );
}

export default Details;
export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const foods = await res.json();
  const myFoods = foods.slice(0, 5);
  const paths = myFoods.map((food) => ({ params: { id: food.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.BASE_URL}/data/${params.id}`);
  const food = await res.json();
  if (!food.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      food,
    },
    revalidate: 60 * 60,
  };
}
