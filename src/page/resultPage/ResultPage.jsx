import React from "react";
import { Navbar } from "../../components";
import { useQuiz } from "../../context";
import "./result-page.css";

export default function ResultPage() {
  const { quizState, setQuizState } = useQuiz();
  return (
    <section className="result-page-namespace page-wrap">
      <section className="result-page-namespace page-nav">
        <Navbar></Navbar>
      </section>

      <section className="result-page-namespace page-main">
        <main className="result-page-namespace main-container">
          <div className="question-card">
            <h1 className="question-card__title dui-primary-color dui-util-txt-align-cent">
              Plant Types Result
            </h1>
            {quizState.questions.map((questionDetails) => {
              return (
                <>
                  <p className="question-card__question dui-util-txt-align-cent dui-util-spc-pad-s dui-util-txt-md">
                    {questionDetails.question}
                  </p>

                  <ul className="dui-ul question-card__options">
                    {questionDetails.options.map((op) => {
                      return (
                        <li
                          key={op._id}
                          className={`question-card__option dui-util-bdr-radi-m dui-util-spc-pad-s ${
                            questionDetails.correctAnswerId === op._id
                              ? "question-card__option-correct-result"
                              : ""
                          } ${
                            questionDetails.answered &&
                            questionDetails.answered === op._id &&
                            questionDetails.answered !==
                              questionDetails.correctAnswerId
                              ? "question-card__option-incorrect-result"
                              : ""
                          }`}
                        >
                          <p>
                            <span className="dui-util-fw-bld">1) </span>
                            {op.option}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </>
              );
            })}
          </div>
        </main>
      </section>
    </section>
  );
}
