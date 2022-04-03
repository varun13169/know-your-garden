import { createContext, useContext, useReducer } from "react";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    const actionType = action.type;
    console.log(action);
    switch (actionType) {
      case "INIT_CATEGORIES":
        return applyFilter({
          ...state,
          categories: action.data.categories,
        });

      case "SORT_BY_QUIZ_COUNT":
        return {
          ...state,
          sortByQuizCount: action.data.sortByQuizCount,
          categoriesToShow: [...state.categoriesToShow].sort((a, b) => {
            const beta =
              action.data.sortByQuizCount === "LOW_TO_HIGH" ? +1 : -1;
            return beta * (Number(b.quizCount) - Number(a.quizCount));
          }),
        };

      case "FILTER_BY_QUIZ_COUNT":
        return applyFilter({
          ...state,
          filterByQuizCount: action.data.filterByQuizCount,
        });
      default:
        console.log("ERROR: default is getting hit");
    }
  };

  const [categoryState, setCategoryState] = useReducer(reducer, {
    categories: [],
    categoriesToShow: [],
    sortByQuizCount: "HIGH_TO_LOW",
    filterByQuizCount: -1,
  });

  return (
    <CategoryContext.Provider
      value={{
        categoryState,
        setCategoryState,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);
export { CategoryContextProvider, useCategory };

const applyFilter = (categoryState) => {
  return {
    ...categoryState,
    categoriesToShow: categoryState.categories.filter((category) => {
      return category.quizCount >= categoryState.filterByQuizCount;
    }),
  };
};
