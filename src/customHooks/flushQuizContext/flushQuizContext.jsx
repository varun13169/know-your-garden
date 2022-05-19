import React, { useEffect } from "react";
import { useQuiz } from "../../context";

function flushQuizContext(props) {
  const { quizState, setQuizState } = useQuiz();

  useEffect(() => {
    setQuizState({
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
  }, []);

  return quizState;
}

export { flushQuizContext };
