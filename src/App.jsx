import { Routes, Route } from "react-router-dom";
import { QuizPage } from "./page";
import { getTheme } from "./utilScripts/themeUtils";

export default function App() {
  return (
    <div className={"App " + getTheme()}>
      <Routes>
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}
