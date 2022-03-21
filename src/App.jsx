import { Routes, Route } from "react-router-dom";
import { QuizPage, CategoryPage, QuizCategoryPage } from "./page";
import { getTheme } from "./utilScripts/themeUtils";

export default function App() {
  return (
    <div className={"App " + getTheme()}>
      <Routes>
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/" element={<CategoryPage />} />
        <Route path="/quiz-category" element={<QuizCategoryPage />} />
      </Routes>
    </div>
  );
}
