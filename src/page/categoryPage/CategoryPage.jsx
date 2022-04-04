import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { quizeCategories } from "../../backend/db/quizCategory";
import { Navbar } from "../../components";
import "./category-page.css";
// import categoryPageStyles from "./category-page.modules.css";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let config = {
      headers: {
        Accept: "*/*",
      },
    };

    // Fetch Categories
    (async function () {
      const { data } = await axios.get("/api/quiz-categories");
      setCategories((categories) => data.categories);
    })();
  }, []);

  return (
    <section className="category-page-namespace page-wrap">
      <section className="category-page-namespace page-nav">
        <Navbar></Navbar>
      </section>

      <section className="category-page-namespace page-main">
        <main
          className={
            "category-page-namespace main-container dui-util-spc-pad-m"
          }
        >
          <h1 className="category-page-namespace quiz-category-title dui-primary-color dui-util-txt-align-cent">
            Quiz Category
          </h1>

          <div className="category-page-namespace category-card-container">
            {categories.map((category) => {
              return (
                <Link
                  className="category-page-namespace category-card dui-util-bdr-radi-m"
                  to={"/quiz-category/" + category._id}
                >
                  <img
                    className="category-page-namespace category-card__img dui-util-bdr-radi-m"
                    src={category.categoryImg}
                  />
                  <p className="category-page-namespace category-card__title dui-primary-bg-color-opc-75pct">
                    {category.categoryName}
                  </p>
                </Link>
              );
            })}
          </div>
        </main>
      </section>
    </section>
  );
}
