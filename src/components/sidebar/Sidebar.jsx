import React from "react";
import { useCategory } from "../../context";
import "./sidebar.css";

export default function Sidebar() {
  const { categoryState, setCategoryState } = useCategory();

  return (
    <aside className="sidebar dui-util-spc-pad-1_6rem-s">
      <div className="sidebar__sort-by">
        <p className="dui-util-txt-sm dui-util-fw-bld dui-util-disp-inln-blk">
          Sort By Quiz Count
        </p>

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
      </div>

      <div className="sidebar__filter-by">
        <p className="dui-util-txt-sm dui-util-fw-bld dui-util-disp-inln-blk">
          Filter By Quiz Count
        </p>

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
      </div>
    </aside>
  );
}
