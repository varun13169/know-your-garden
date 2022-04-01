import { Routes, Route } from "react-router-dom";
import {
  QuizPage,
  CategoryPage,
  QuizCategoryPage,
  RulesPage,
  ResultPage,
} from "./page";
import { getTheme } from "./utilScripts/themeUtils";

export default function App() {
  return (
    <div className={"App " + getTheme()}>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/quiz-category/:id" element={<QuizCategoryPage />} />
        <Route path="/rules/:id" element={<RulesPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}
