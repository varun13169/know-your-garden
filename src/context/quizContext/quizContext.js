import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {
  const [quizState, setQuizState] = useState({
    questionIdx: 0,
    score: 0,
    questions: [
      {
        _id: "",
        question: "",
        options: [{ _id: "", option: "" }],
        correctAnswerId: "",
      },
    ],
  });
  return (
    <QuizContext.Provider
      value={{
        quizState,
        setQuizState,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);
export { QuizContextProvider, useQuiz };
