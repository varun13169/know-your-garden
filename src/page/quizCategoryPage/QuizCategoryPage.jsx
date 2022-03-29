import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { quizesByCategory } from "../../backend/db/quizes";
import { Navbar } from "../../components";
import "./quiz-category-page.css";

export default function QuizCategoryPage() {
  const { id } = useParams();
  const [quizes, setQuizes] = useState([]);
  useEffect(() => {
    const uuid = "9e6be463-6dda-4ace-9667-670d571d6c22";
    console.log(id);
    setQuizes(quizesByCategory[id]);
  }, []);

  return (
    <section class="quiz-category-page-namespace page-wrap">
      <section class="quiz-category-page-namespace page-nav">
        <Navbar></Navbar>
      </section>

      <section class="quiz-category-page-namespace page-main">
        <main class="quiz-category-page-namespace main-container dui-util-spc-pad-m">
          <h1 class="quiz-category-title dui-primary-color dui-util-txt-align-cent">
            Quiz Category
          </h1>

          <div class="quiz-card-container">
            {quizes.map((quiz) => {
              return (
                <Link
                  class="quiz-card dui-util-bdr-radi-m dui-util-txt-decoration-none"
                  to={"/quiz/" + quiz._id}
                >
                  <img
                    class="quiz-card__img dui-util-bdr-radi-m"
                    src={quiz.quizImg}
                  ></img>
                  <div class="quiz-card__info dui-util-spc-pad-s">
                    <h2 class="quiz-card__title">{quiz.quizName}</h2>
                    <p class="quiz-card__desc">{quiz.quizDescription}</p>
                    <p class="quiz-card__ques-info">
                      {`${quiz.quizTotalQuestions} Questions`}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>
      </section>
    </section>
  );
}
