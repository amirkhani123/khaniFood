import MenuPage from "../../components/templates/MenuPage";

function Menu({ foods }) {
  return (
    <div>
      <MenuPage foods={foods} />
    </div>
  );
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const foods = await res.json();
  return {
    props: {
      foods,
    },
    revalidate: 20,
  };
}
