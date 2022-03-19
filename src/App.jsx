import { QuizPage } from "./page";
import { getTheme } from "./utilScripts/themeUtils";

export default function App() {
  
  return (
    <div className={"App " + getTheme()}>
      <QuizPage></QuizPage>
    </div>
  );
}
