import "./quiz-page.css";
import { Navbar } from "../../components";
import { useEffect } from "react";
import { useQuiz } from "../../context";
import { quizeQuestions } from "../../backend/db/quizesQuestions";
import { useNavigate, useParams } from "react-router-dom";

export default function QuizPage() {
  const { quizState, setQuizState } = useQuiz();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Varun");
    console.log(quizeQuestions);
    console.log("Kumar");
    setQuizState((quizState) => ({
      ...quizState,
      questions: quizeQuestions[id].questions,
    }));
  }, []);

  return (
    <section className="quiz-page-namespace page-wrap">
      <section className="quiz-page-namespace page-nav">
        <Navbar></Navbar>
      </section>

      <section className="quiz-page-namespace page-main">
        <main className="main-container dui-util-spc-pad-m">
          <div className="question-card">
            <h1 className="question-card__title dui-primary-color dui-util-txt-align-cent">
              Plant Types
            </h1>

            <p className="question-card__question dui-util-txt-align-cent dui-util-spc-pad-s dui-util-txt-md">
              {quizState.questions[quizState.questionIdx].question}
            </p>

            <div className="question-card__status dui-util-spc-pad-s">
              <p className="question-card__ques-status dui-util-txt-align-left">
                Question:{" "}
                <span>
                  {quizState.questionIdx + 1}/{quizState.questions.length}
                </span>
              </p>
              <p className="question-card__score-status dui-util-txt-align-right">
                Score: <span>{quizState.score}</span>
              </p>
            </div>

            <ul className="dui-ul question-card__options">
              {quizState.questions[quizState.questionIdx].options.map(
                (op, idx) => {
                  return (
                    <li
                      key={op._id}
                      className="question-card__option dui-util-bdr-radi-m dui-util-spc-pad-s"
                      onClick={(e) => {
                        let newQuizState = { ...quizState };
                        const isCorrect =
                          op._id ===
                          quizState.questions[quizState.questionIdx]
                            .correctAnswerId
                            ? true
                            : false;

                        // Recording the response
                        newQuizState.questions[quizState.questionIdx] = {
                          ...quizState.questions[quizState.questionIdx],
                          answered: op._id,
                        };

                        if (isCorrect) {
                          newQuizState.score = newQuizState.score + 5;
                        } else {
                          newQuizState.score = newQuizState.score - 3;
                        }

                        newQuizState.questionIdx = newQuizState.questionIdx + 1;
                        // varundev: Revisit this

                        if (
                          newQuizState.questionIdx ===
                          quizState.questions.length
                        ) {
                          navigate("/result");
                        }

                        setQuizState(newQuizState);
                      }}
                    >
                      <p>
                        <span className="dui-util-fw-bld">{`${
                          idx + 1
                        }) `}</span>
                        {op.option}
                      </p>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </main>
      </section>
    </section>
  );
}
