import "./quiz-page.css";
import { Navbar } from "../../components";
import { useEffect } from "react";
import { useQuiz } from "../../context";
import { quizeQuestions } from "../../backend/db/quizes";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const { quizState, setQuizState } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    quizeQuestions;
    setQuizState((quizState) => ({
      ...quizState,
      questions: quizeQuestions.questions,
    }));
  }, []);

  return (
    <section class="page-wrap">
      <section class="page-nav">
        <Navbar></Navbar>
      </section>

      <section class="page-header"></section>

      <section class="page-sidebar"></section>

      <section class="page-main">
        <main class="main-container dui-util-spc-pad-m">
          <div class="quiz-card">
            <h1 class="quiz-card__title dui-primary-color dui-util-txt-align-cent">
              Plant Types
            </h1>

            <p class="quiz-card__question dui-util-txt-align-cent dui-util-spc-pad-s dui-util-txt-md">
              {quizState.questions[quizState.questionIdx].question}
            </p>

            <div class="quiz-card__status dui-util-spc-pad-s">
              <p class="quiz-card__ques-status dui-util-txt-align-left">
                Question:{" "}
                <span>
                  {quizState.questionIdx + 1}/{quizState.questions.length}
                </span>
              </p>
              <p class="quiz-card__score-status dui-util-txt-align-right">
                Score: <span>0</span>
              </p>
            </div>

            <ul class="dui-ul quiz-card__options">
              {quizState.questions[quizState.questionIdx].options.map((op) => {
                return (
                  <li
                    key={op._id}
                    class="quiz-card__option dui-util-bdr-radi-m dui-util-spc-pad-s"
                    onClick={(e) => {
                      let newQuizState = { ...quizState };
                      const isCorrect =
                        op._id ===
                        quizState.questions[quizState.questionIdx]
                          .correctAnswerId
                          ? true
                          : false;

                      if (isCorrect) {
                        newQuizState.questions = {
                          ...newQuizState.questions,
                          answered: op._id,
                        };
                        newQuizState.score = newQuizState.score + 5;
                      } else {
                        newQuizState.score = newQuizState.score - 1;
                      }
                      newQuizState.questionIdx = newQuizState.questionIdx + 1;
                      // varundev: Revisit this
                      if (
                        newQuizState.questionIdx ===
                        quizState.questions.length - 1
                      ) {
                        navigate("/quiz-category");
                      }

                      setQuizState(newQuizState);

                      console.log(e);
                    }}
                  >
                    <p>
                      <span class="dui-util-fw-bld">1) </span>
                      {op.option}
                    </p>
                  </li>
                );
              })}
              {/* <li class="quiz-card__option dui-util-bdr-radi-m dui-util-spc-pad-s">
                <p>
                  <span class="dui-util-fw-bld">1) </span>Option 1
                </p>
              </li>
              <li class="quiz-card__option dui-util-bdr-radi-m dui-util-spc-pad-s">
                <p>
                  <span class="dui-util-fw-bld">2) </span>Option 1
                </p>
              </li>
              <li class="quiz-card__option dui-util-bdr-radi-m dui-util-spc-pad-s">
                <p>
                  <span class="dui-util-fw-bld">3) </span>Option 1
                </p>
              </li> */}
            </ul>
          </div>
        </main>
      </section>

      <section class="page-footer"></section>
    </section>
  );
}
