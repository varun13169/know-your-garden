import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { quizeCategories } from "../../backend/db/quizCategory";
import { Navbar } from "../../components";
import { useCategory } from "../../context";
import "./category-page.css";
// import categoryPageStyles from "./category-page.modules.css";

export default function CategoryPage() {
  // const [categories, setCategories] = useState([]);
  const { categoryState, setCategoryState } = useCategory();

  useEffect(() => {
    let config = {
      headers: {
        Accept: "*/*",
      },
    };

    // Fetch Categories
    (async function () {
      const { data } = await axios.get("/api/quiz-categories");
      // setCategories((categories) => data.categories);
      setCategoryState({
        type: "INIT_CATEGORIES",
        data: data,
      });
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

          <fieldset className="category-page-namespace quiz-category-filter">
            <legend>
              <span>Sort By Quiz Count</span>
            </legend>
            <div>
              {/* <!-- Radio Button Component Starts --> */}
              <label className="dui-inp-radio-btn dui-util-txt-sm">
                Low to High
                <input
                  type="radio"
                  name="sort-by"
                  checked={categoryState.sortByQuizCount === "LOW_TO_HIGH"}
                  onChange={() =>
                    setCategoryState({
                      type: "SORT_BY_QUIZ_COUNT",
                      data: { sortByQuizCount: "LOW_TO_HIGH" },
                    })
                  }
                />
                <span className="dui-inp-radio-btn__checkmark"></span>
              </label>

              <label className="dui-inp-radio-btn dui-util-txt-sm">
                High to Low
                <input
                  type="radio"
                  name="sort-by"
                  checked={categoryState.sortByQuizCount === "HIGH_TO_LOW"}
                  onChange={() =>
                    setCategoryState({
                      type: "SORT_BY_QUIZ_COUNT",
                      data: { sortByQuizCount: "HIGH_TO_LOW" },
                    })
                  }
                />
                <span className="dui-inp-radio-btn__checkmark"></span>
              </label>
              {/* <!-- Radio Button Component Ends --> */}
            </div>
          </fieldset>

          <fieldset className="category-page-namespace quiz-category-filter">
            <legend>
              <span>Filter By Quiz Count</span>
            </legend>

            <div>
              {/* <!-- Radio Button Component Starts --> */}
              <label className="dui-inp-radio-btn dui-util-txt-sm">
                4 Quizzes &amp; above
                <input
                  type="radio"
                  name="rating"
                  checked={categoryState.filterByQuizCount === 4}
                  onChange={() =>
                    setCategoryState({
                      type: "FILTER_BY_QUIZ_COUNT",
                      data: { filterByQuizCount: 4 },
                    })
                  }
                />
                <span className="dui-inp-radio-btn__checkmark"></span>
              </label>

              <label className="dui-inp-radio-btn dui-util-txt-sm">
                3 Quizzes &amp; above
                <input
                  type="radio"
                  name="rating"
                  checked={categoryState.filterByQuizCount === 3}
                  onChange={() =>
                    setCategoryState({
                      type: "FILTER_BY_QUIZ_COUNT",
                      data: { filterByQuizCount: 3 },
                    })
                  }
                />
                <span className="dui-inp-radio-btn__checkmark"></span>
              </label>

              <label className="dui-inp-radio-btn dui-util-txt-sm">
                2 Quizzes &amp; above
                <input
                  type="radio"
                  name="rating"
                  checked={categoryState.filterByQuizCount === 2}
                  onChange={() =>
                    setCategoryState({
                      type: "FILTER_BY_QUIZ_COUNT",
                      data: { filterByQuizCount: 2 },
                    })
                  }
                />
                <span className="dui-inp-radio-btn__checkmark"></span>
              </label>

              <label className="dui-inp-radio-btn dui-util-txt-sm">
                1 Quiz &amp; above
                <input
                  type="radio"
                  name="rating"
                  checked={categoryState.filterByQuizCount === 1}
                  onChange={() =>
                    setCategoryState({
                      type: "FILTER_BY_QUIZ_COUNT",
                      data: { filterByQuizCount: 1 },
                    })
                  }
                />
                <span className="dui-inp-radio-btn__checkmark"></span>
              </label>
              {/* <!-- Radio Button Component Ends --> */}
            </div>
          </fieldset>

          <div className="category-page-namespace category-card-container">
            {categoryState.categoriesToShow.map((category) => {
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
