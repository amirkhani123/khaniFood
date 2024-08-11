import Head from "next/head";
import MenuPage from "../../components/templates/MenuPage";

function Menu({ foods }) {
  return (
    <div>
    <Head>
      <title>KhaniFood | menu</title>
    </Head>
      <MenuPage foods={foods} />
    </div>
  );
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const foods = await res.json();
  return {
    props: {
      foods,
    },
    revalidate: 60 * 60,
  };
}
