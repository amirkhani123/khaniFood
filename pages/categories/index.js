import CategoriesPage from "../../components/templates/CategoriesPage";

function Categories({ data }) {
  return (
    <div>
      <CategoriesPage data={data} />
    </div>
  );
}

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  console.log(difficulty);
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  const filteredDate = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.difficulty && detail.difficulty === difficulty
    );
    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["cooking time"] || "";
      const [timeDetails] = cookingTime.split(" ");
      if (time == "less" && timeDetails && +timeDetails <= 30) {
        return detail;
      } else if (time == "more" && +timeDetails > 30) {
        return detail;
      }
    });

    if (difficulty && time && difficultyResult.length && timeResult.length) {
      return item;
    } else if (difficulty && !time && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });
  return {
    props: { data: filteredDate },
  };
}
