import { useEffect, useState } from "react";
import classes from "./categoriesPage.module.css";
import { useRouter } from "next/router";
import Card from "../modules/Card";
import toast from "react-hot-toast";

function CategoriesPage({ data }) {
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  const router = useRouter();
  useEffect(() => {
    const { difficulty, time } = router.query;
    if (difficulty !== query.difficulty || time !== query.time) {
      setQuery({ difficulty, time });
    }
  }, []);
  const changeHandeller = (e) => {
    setQuery((query) => ({ ...query, [e.target.name]: e.target.value }));
  };
  const clickHandeler = () => {
    if (!query.difficulty && !query.time) {
      toast.error("select once filter");
    } else {
      router.push({ pathname: "/categories", query });
    }
  };
  return (
    <div className={classes.container}>
      <h2>Categories</h2>
      <div className={classes.search}>
        <select
          value={query.difficulty}
          onChange={changeHandeller}
          name="difficulty"
        >
          <option value="">Difficulty</option>
          <option value="easy">Easy</option>
          <option value="meduim">Meduim</option>
          <option value="hard">Hard</option>
        </select>
        <select value={query.time} onChange={changeHandeller} name="time">
          <option value="">Cooking Time</option>
          <option value="more">More than 30 mins</option>
          <option value="less">less than 30 mins</option>
        </select>
        <button onClick={clickHandeler}>search</button>
      </div>
      <div className={classes.cards}>
        {data.length ? (
          data.map((food) => <Card key={food.id} {...food} />)
        ) : (
          <img
            src="/images/search1.png"
            alt="searchImg"
            className={classes.img}
          />
        )}
      </div>
    </div>
  );
}

export default CategoriesPage;
